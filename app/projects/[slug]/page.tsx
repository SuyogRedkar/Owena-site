import { projects } from "@/data/projects";
import ImageSlider from "@/components/ImageSlider";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);

  if (!p) return notFound();

  return (
    <main>
      <section className="detailHero">
        <div className="container">
          {/* Back link */}
          <Link href="/projects" className="back">
            ← Back to projects
          </Link>

          {/* Title */}
          <div className="projectTitle">
            <div className="eyebrow">{p.category}</div>

            <h1 className="serif">{p.title}</h1>
          </div>

          {/* Image */}
          <div className="detailImage">
            <ImageSlider images={p.image} title={p.title} />
          </div>

          {/* Description */}
          <div className="projectDescription">
            <div>
              <p className="lead">{p.description}</p>
            </div>

            <div className="projectDetails">

              <p>
                <strong>Project Type</strong>
                <br />
                {p.type}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="section" style={{ paddingTop: 55 }}>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 20,
            alignItems: "center",
          }}
        >
          <p className="lead" style={{ margin: 0 }}>
            Interested in discussing a similar project?
          </p>

          <Link href="/consultation" className="btn dark">
            Book a Consultation ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
