import { NextResponse } from "next/server";
import { auth as getSessionAuth } from "@/auth";

export async function POST() {
  try {
    const session = await getSessionAuth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized or missing email" }, { status: 401 });
    }

    const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Firebase API key not configured" }, { status: 500 });
    }

    const email = session.user.email;
    const defaultPassword = `MentorAuth_${session.user.id || "Secure"}_2026!`;
    let idToken: string | null = null;

    // 1. Try to create account in Firebase Auth if it doesn't exist yet
    const signUpRes = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password: defaultPassword,
          returnSecureToken: true,
        }),
      }
    );

    const signUpData = await signUpRes.json();

    if (signUpData.idToken) {
      idToken = signUpData.idToken;
    } else if (signUpData.error?.message?.includes("EMAIL_EXISTS")) {
      // 2. If email exists in Firebase, sign in to retrieve token
      const signInRes = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password: defaultPassword,
            returnSecureToken: true,
          }),
        }
      );
      const signInData = await signInRes.json();

      if (signInData.idToken) {
        idToken = signInData.idToken;
      } else {
        // If password differs, trigger password reset verification link
        const resetRes = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              requestType: "PASSWORD_RESET",
              email,
            }),
          }
        );
        const resetData = await resetRes.json();
        if (resetData.email) {
          return NextResponse.json({
            success: true,
            message: "Verification / security link sent to your email!",
          });
        }
      }
    }

    if (!idToken) {
      return NextResponse.json(
        { error: signUpData.error?.message || "Failed to authenticate with Firebase" },
        { status: 400 }
      );
    }

    // 3. Trigger VERIFY_EMAIL code
    const sendOobRes = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken,
        }),
      }
    );

    const sendOobData = await sendOobRes.json();

    if (sendOobData.error) {
      return NextResponse.json(
        { error: sendOobData.error.message || "Failed to send verification email" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Verification link sent to ${email}`,
    });
  } catch (error) {
    console.error("Send verification email route error:", error);
    return NextResponse.json({ error: "Failed to send verification email" }, { status: 500 });
  }
}
