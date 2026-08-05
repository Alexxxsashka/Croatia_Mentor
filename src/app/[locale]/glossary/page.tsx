"use client";

import { useEffect } from "react";
import { useRouter } from "@/i18n/navigation";

export default function GlossaryRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/vocabulary?tab=glossary");
  }, [router]);

  return null;
}
