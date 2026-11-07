import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { AppShell } from "@/components/app-shell";

export default async function WorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { orgId, orgSlug } = await auth.protect();

  if (!orgId) {
    redirect("/onboarding");
  }

  return (
    <AppShell organizationSlug={orgSlug ?? "workspace"}>
      {children}
    </AppShell>
  );
}
