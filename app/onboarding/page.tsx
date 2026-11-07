import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { WorkspaceBootstrap } from "@/components/workspace-bootstrap";

export default async function OnboardingPage() {
  const { orgId } = await auth.protect();

  if (orgId) {
    redirect("/");
  }

  return <WorkspaceBootstrap />;
}
