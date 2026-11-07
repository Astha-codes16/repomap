"use client";

import { useAuth, useOrganizationList } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { provisionWorkspace } from "@/app/onboarding/actions";

export function WorkspaceBootstrap() {
  const { isLoaded: authLoaded, userId } = useAuth();
  const { isLoaded: organizationsLoaded, setActive } = useOrganizationList({
    userMemberships: true,
  });
  const router = useRouter();
  const started = useRef(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoaded || !organizationsLoaded || !userId || !setActive || started.current) {
      return;
    }

    started.current = true;
    void provisionWorkspace()
      .then(async ({ organizationId }) => {
        await setActive({ organization: organizationId });
        router.replace("/");
      })
      .catch(() => {
        setError("We could not prepare your workspace. Please try again.");
        started.current = false;
      });
  }, [authLoaded, organizationsLoaded, router, setActive, userId]);

  return (
    <main className="onboarding-page">
      <div className="onboarding-card">
        <span className="eyebrow">First things first</span>
        <h1>Preparing your workspace</h1>
        <p>We are setting up a private workspace for your account.</p>
        {error ? <p className="error-message">{error}</p> : <div className="loading-line" />}
      </div>
    </main>
  );
}
