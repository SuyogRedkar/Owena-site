import Link from "next/link";

const steps = [
  ["01", "Discover", "We listen to your ideas, requirements and aspirations."],
  ["02", "Design", "We develop the concept, spatial planning and visual direction."],
  ["03", "Develop", "We refine the design, materials, details and technical requirements."],
  ["04", "Execute / Build", "We turn approved designs and plans into reality through interior execution or construction."],
  ["05", "Deliver", "We work towards a finished space that reflects your original vision."],
];

export default function ProcessPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="eyebrow">Our Process</div>
          <h1 className="section-title serif">From Idea to Completion</h1>
          <p className="lead">
            A considered process that connects creative thinking, technical planning and practical execution.
          </p>
        </div>
      </section>

      <section className="section process">
        <div className="container">
          <div className="eyebrow">How we work</div>
          <h2 className="section-title serif">A clear path from concept to reality.</h2>
          <div className="processGrid">
            {steps.map(([num, title, body]) => (
              <article className="processStep" key={num}>
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
            <div className="eyebrow">Your project</div>
            <h2 className="section-title serif">Let's bring your vision to life.</h2>
          </div>
          <Link className="btn dark" href="/consultation">Book a Consultation</Link>
        </div>
      </section>
    </main>
  );
}
