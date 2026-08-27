import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="projectCard">
      <div className="imgWrap">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={900}
        />
      </div>
      <div className="projectMeta">
        <div>
          <h3>{project.title}</h3>
          <p>
            {project.location} · {project.type}
          </p>
        </div>
        <div className="eyebrow">View</div>
      </div>
    </Link>
  );
}
