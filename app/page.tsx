import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
const features = [
  [
    "01",
    "Creative & Technical",
    "Our background combines creative interior design with civil engineering knowledge.",
  ],
  [
    "02",
    "Design & Execution",
    "We can take a project from interior design through to execution, helping create a more connected experience.",
  ],
  [
    "03",
    "Construction Expertise",
    "We undertake residential and commercial building construction with a focus on practical and quality-driven execution.",
  ],
  [
    "04",
    "End-to-End Approach",
    "From the first idea through design, execution and construction, we aim to make the process easier for our clients.",
  ],
  [
    "05",
    "Personal Approach",
    "As a construction company, we value communication, collaboration and understanding the person behind every project.",
  ],
  [
    "06",
    "Indian & UK Experience",
    "Our academic and professional experience in India and the UK has exposed us to different approaches to design and construction.",
  ],
  [
    "07",
    "Design with Purpose",
    "Good design isn't only about appearance; it's about how a space functions, feels and performs.",
  ],
];
const services = [
  [
    "01",
    "Consultation",
    "Understanding your requirements, lifestyle, vision, budget and site.",
  ],
  [
    "02",
    "Concept Development",
    "Initial ideas, mood boards, spatial planning and design direction.",
  ],
  [
    "03",
    "Design & Planning",
    "Developing the concept into a considered design with drawings, layouts and specifications.",
  ],
  [
    "04",
    "Material Procurement",
    "Material selections, finishes, colour palettes, furniture, lighting and styling.",
  ],
  [
    "05",
    "Technical & Engineering Support",
    "Applying our civil engineering knowledge to help develop practical and technically informed solutions.",
  ],
  [
    "06",
    "3D Visualisation",
    "Helping clients understand how their finished space could look before construction begins.",
  ],
  [
    "07",
    "Construction",
    "Turning the approved design into reality through coordinated construction and project execution.",
  ],
  [
    "08",
    "Project Coordination",
    "Helping manage communication, progress, quality and coordination throughout the project.",
  ],
  [
    "09",
    "Renovation & Remodelling",
    "Transforming existing properties into more functional and visually appealing spaces.",
  ],
];
const process = [
  ["01", "Discover", "We listen to your ideas, requirements and aspirations."],
  [
    "02",
    "Design",
    "We develop the concept, spatial planning and visual direction.",
  ],
  [
    "03",
    "Develop",
    "We refine the design, materials, details and technical requirements.",
  ],
  [
    "04",
    "Execute / Build",
    "We turn approved designs and plans into reality through interior execution or construction.",
  ],
  [
    "05",
    "Deliver",
    "We work towards a finished space that reflects your original vision.",
  ],
];
export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="heroCopy">
          <div className="eyebrow">Souza Designers & Construction</div>
          <h1 className="serif">
            Designing Spaces.
            <br />
            Building Visions.
          </h1>
          <p>
            We bring together interior design, execution and building
            construction to create beautiful, functional spaces from concept to
            completion.
          </p>
          <div className="heroActions">
            <Link href="/consultation" className="btn dark">
              Book a Consultation ↗
            </Link>
            <Link href="/projects" className="btn">
              Explore Projects
            </Link>
          </div>
        </div>
        <div className="heroImage" />
      </section>
      <section id="about" className="section">
        <div className="container">
          <div className="split">
            <div>
              <div className="eyebrow">About Us</div>
              <h2 className="section-title serif">
                Two Perspectives.
                <br />
                One Vision.
              </h2>
            </div>
            <div className="aboutBlock">
              <p className="lead">
                As twin sisters and co-founders of Souza Designers &
                Construction, our journey brings together a shared passion for
                design, construction and creating meaningful spaces.
              </p>
              <p className="lead">
                Our academic and professional journey in India and the UK,
                including experience across five projects during our
                internships, has helped us develop an understanding of both the
                creative and technical sides of the built environment.
              </p>
              <p className="lead">
                With our combined background in civil engineering and interior
                design, we approach every project with a balance of creativity,
                functionality and technical thinking.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="eyebrow">Why Choose Us?</div>
          <div className="featureGrid" style={{ marginTop: 28 }}>
            {features.map(([n, t, d]) => (
              <div className="feature" key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="projects">
        <div className="container">
          <div className="projectsHead">
            <div>
              <div className="eyebrow">Selected Work</div>
              <h2 className="section-title serif">Our Projects</h2>
            </div>
            <Link href="/projects" className="btn">
              View All Projects ↗
            </Link>
          </div>
          <div className="projectGrid">
            {projects.slice(0, 4).map((p) => (
              <ProjectCard project={p} key={p.slug} />
            ))}
          </div>
        </div>
      </section>
      <section className="section" id="services">
        <div className="container">
          <div className="eyebrow">What We Do</div>
          <h2 className="section-title serif">
            From Design to Execution.
            <br />
            From Ground Up to Completion.
          </h2>
          <p className="lead">
            We provide interior design, interior execution and construction
            services for residential and commercial projects, helping clients
            move from their initial idea to a finished space.
          </p>
          <div className="serviceList" style={{ marginTop: 55 }}>
            {services.map(([n, t, d]) => (
              <div className="service" key={n}>
                <div className="num">{n}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section process" id="process">
        <div className="container">
          <div className="eyebrow">Our Process</div>
          <h2 className="section-title serif">From Idea to Completion</h2>
          <div className="processGrid">
            {process.map(([n, t, d]) => (
              <div className="processStep" key={n}>
                <div className="num">{n}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section cta">
        <div className="container ctaInner">
          <div>
            <div className="eyebrow">Start a conversation</div>
            <h2 className="section-title serif">
              Have an idea for your
              <br />
              space or building?
            </h2>
            <p className="lead">Let's bring it to life.</p>
          </div>
          <Link href="/consultation" className="btn dark">
            Book a Consultation ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
