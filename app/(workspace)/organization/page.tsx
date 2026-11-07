import { OrganizationProfile } from "@clerk/nextjs";
import { Suspense } from "react";

export default function OrganizationPage() {
  return (
    <section className="organization-page">
      <div className="section-heading">
        <span className="eyebrow">Workspace settings</span>
        <h1>Team</h1>
        <p>Invite people and manage the organization you are working in.</p>
      </div>
      <Suspense>
        <OrganizationProfile routing="hash" />
      </Suspense>
    </section>
  );
}
