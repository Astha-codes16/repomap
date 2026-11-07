export default function WorkspacePage() {
  return (
    <section className="workspace-page">
      <div className="hero-copy">
        <span className="eyebrow">A clear view of your work</span>
        <h1>Map the work. Move the team.</h1>
        <p>
          Your organization workspace is ready. This is the shared home for the
          projects, decisions, and context your team builds together.
        </p>
      </div>
      <div className="workspace-grid">
        <article className="workspace-panel workspace-panel-primary">
          <span className="panel-index">01</span>
          <h2>Workspace overview</h2>
          <p>Projects and shared context will appear here as your map takes shape.</p>
        </article>
        <article className="workspace-panel">
          <span className="panel-index">02</span>
          <h2>Bring in the team</h2>
          <p>Invite collaborators from the Team area and keep everyone oriented.</p>
          <a className="text-link" href="/organization">
            Manage members <span aria-hidden="true">-&gt;</span>
          </a>
        </article>
      </div>
    </section>
  );
}
