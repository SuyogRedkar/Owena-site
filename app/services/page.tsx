import Link from "next/link";

const services = [
  ["01", "Consultation", "Understanding your requirements, lifestyle, vision, budget and site."],
  ["02", "Concept Development", "Initial ideas, mood boards, spatial planning and design direction."],
  ["03", "Design & Planning", "Developing the concept into a considered design with drawings, layouts and specifications."],
  ["04", "Material Procurement", "Material selections, finishes, colour palettes, furniture, lighting and styling."],
  ["05", "Technical & Engineering Support", "Applying our civil engineering knowledge to help develop practical and technically informed solutions."],
  ["06", "3D Visualisation", "Helping clients understand how their finished space could look before construction begins."],
  ["07", "Construction", "Turning the approved design into reality through coordinated construction and project execution."],
  ["08", "Project Coordination", "Helping manage communication, progress, quality and coordination throughout the project."],
  ["09", "Renovation & Remodelling", "Transforming existing properties into more functional and visually appealing spaces."],
];

export default function ServicesPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="eyebrow">Our Services</div>
          <h1 className="section-title serif">From Design to Execution. From Ground Up to Completion.</h1>
          <p className="lead">
            We provide interior design, interior execution and construction services for residential and commercial projects, helping clients move from their initial idea to a finished space.
          </p>

          <div className="serviceList" style={{ marginTop: 60 }}>
            {services.map(([num, title, body]) => (
              <article className="service" key={num}>
                <div className="num">{num}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container ctaInner">
          <div>
            <div className="eyebrow">Let's talk</div>
            <h2 className="section-title serif">Ready to discuss your project?</h2>
          </div>
          <Link className="btn dark" href="/consultation">Book a Consultation</Link>
        </div>
      </section>
    </main>
  );
}
