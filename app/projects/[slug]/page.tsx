import { projects } from "@/data/projects";
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
          <Link href="/projects" className="back">
            ← Back to projects
          </Link>
          <div className="detailCopy">
            <div>
              <div className="eyebrow">{p.category}</div>
              <h1 className="serif">{p.title}</h1>
            </div>
            <div>
              <p className="lead">{p.description}</p>
              <p
                style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.8 }}
              >
                <strong>Location</strong>
                <br />
                {p.location}
                <br />
                <br />
                <strong>Project Type</strong>
                <br />
                {p.type}
              </p>
            </div>
          </div>
          <div className="detailImage">
            <Image
              src={p.image}
              alt={p.title}
              width={1800}
              height={1100}
              priority
            />
          </div>
        </div>
      </section>
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
