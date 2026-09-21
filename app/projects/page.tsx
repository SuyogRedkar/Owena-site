import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
export default function Projects() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="eyebrow">Portfolio</div>
          <h1 className="section-title serif">Our Projects</h1>
          <p className="lead">
            A selection of our interior design, execution and construction work.
          </p>
          <div
            style={{
              margin: "70px 0 35px",
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            <span className="btn">All</span>
            <span className="btn">Interior Design &amp; Execution</span>
            <span className="btn">Construction</span>
          </div>
          <div className="projectGrid">
            {projects.map((p) => (
              <ProjectCard project={p} key={p.slug} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
