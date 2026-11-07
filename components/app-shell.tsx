import {
  OrganizationSwitcher,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function AppShell({
  children,
  organizationSlug,
}: {
  children: React.ReactNode;
  organizationSlug: string;
}) {
  return (
    <div className="app-frame">
      <header className="app-header">
        <Link className="brand" href="/">
          <span className="brand-mark">R</span>
          <span>RepoMap</span>
        </Link>
        <nav className="app-nav" aria-label="Workspace navigation">
          <Link href="/">Overview</Link>
          <Link href="/organization">Team</Link>
        </nav>
        <div className="account-controls">
          <OrganizationSwitcher
            afterCreateOrganizationUrl="/"
            afterLeaveOrganizationUrl="/onboarding"
          />
          <ThemeToggle />
          <UserButton />
        </div>
      </header>
      <main className="app-main">
        <div className="workspace-kicker">
          <span>Workspace</span>
          <strong>{organizationSlug}</strong>
        </div>
        {children}
      </main>
    </div>
  );
}
