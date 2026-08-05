"use client";

import { useEffect } from "react";
import { useRouter } from "@/i18n/navigation";

export default function LearnPageRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard");
  }, [router]);

  return null;
}
