import SectionHeading from "@/components/section-heading";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type ProjectCaseStudy = {
  problem: { label: string; text: string };
  solution?: { label: string; text: string };
  myContribution?: { label: string; text: string };
  keyFeatures?: { label: string; text: string };
  keyWork?: { label: string; text: string };
  learned: { label: string; text: string };
};

type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  image: { src: string; alt: string; label: string };
  links: { label: string; href: string }[];
  tags: string[];
  caseStudy: ProjectCaseStudy;
  note?: string;
  imagePosition: "first" | "last";
};

const projects: Project[] = [
  {
    id: "azue-perfume-house",
    category: "Full-Stack E-Commerce",
    title: "AZUE Perfume House",
    description:
      "A full-stack e-commerce application for selling authentic perfumes online. I built it as a practical way to learn how a complete real-world web application is planned, built, and managed.",
    image: {
      src: "/azue-perfume-house.png",
      alt: "AZUE perfume bottle on a stone surface",
      label: "Personal hobby project",
    },
    links: [
      { label: "Live Demo", href: "https://azue-perfume-house.netlify.app/" },
      {
        label: "Frontend Repo",
        href: "https://github.com/suanhsawmtung/Azue-Perfume-House",
      },
      {
        label: "Backend Repo",
        href: "https://github.com/suanhsawmtung/Azue-Perfume-House-Backend-API",
      },
    ],
    tags: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "REST APIs",
      "JWT",
    ],
    caseStudy: {
      problem: {
        label: "Problem / Motivation",
        text: "I wanted to build a realistic e-commerce project that goes beyond a simple demo and gives me practical experience building a complete web application.",
      },
      solution: {
        label: "Solution",
        text: "I built AZUE Perfume House, a full-stack e-commerce platform with a customer storefront and an administration panel for managing the store.",
      },
      keyFeatures: {
        label: "Key features",
        text: "Product discovery, variants, cart and wishlist, authentication, reviews, orders, blogs, admin management, REST APIs, role-based access, SEO, and responsive design.",
      },
      learned: {
        label: "What I learned",
        text: "I learned more about structuring a larger full-stack application, connecting frontend and backend systems, handling authentication and authorization, designing APIs and database relationships, and deploying a real application.",
      },
    },
    note: "Some seeded product and blog images come from external websites and may need a VPN to load in some regions, especially Myanmar.",
    imagePosition: "first",
  },
  {
    id: "creative-coder-learning-platform",
    category: "Professional Software Development",
    title: "Creative Coder Learning Platform",
    description:
      "A learning platform I contributed to while working at Creative Coder Myanmar. I worked with the development team to improve the platform and support its day-to-day use by learners.",
    image: {
      src: "/creative-coder-myanmar.png",
      alt: "Temporary project image for a professional software project",
      label: "Professional project",
    },
    links: [{ label: "Live Demo", href: "https://creativecodermm.com/" }],
    tags: ["PHP", "Laravel", "Vue.js"],
    caseStudy: {
      problem: {
        label: "Problem",
        text: "The platform needed regular updates, new features, and fixes to support a better learning experience.",
      },
      myContribution: {
        label: "My contribution",
        text: "I developed features, fixed errors, and worked with the team through a shared development workflow.",
      },
      keyWork: {
        label: "Key work",
        text: "Implemented frontend and backend changes, investigated bugs, and helped improve existing parts of the platform.",
      },
      learned: {
        label: "What I learned",
        text: "How to work on an active product, understand existing code, and collaborate with others on practical software work.",
      },
    },
    imagePosition: "last",
  },
];

const ProjectSection = () => {
  return (
    <section className="projects section-border" id="projects">
      <div className="container">
        <SectionHeading
          number="02"
          title="Selected Work"
          intro="A mix of personal experiments and professional work across the stack."
        />
        <div className="space-y-40">
          {projects.map((project) => {
            const image = (
              <div className="space-y-6 order-first lg:order-0">
                <div className="project-image">
                  <img src={project.image.src} alt={project.image.alt} />
                  <span>{project.image.label}</span>
                </div>

                <ProjectLinks
                  links={project.links}
                  className={cn(
                    "hide-under-lg",
                    project.imagePosition === "last"
                      ? "button-row-right"
                      : "button-row",
                  )}
                />
              </div>
            );

            const content = (
              <div className="project-content">
                <p className="eyebrow">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="case-study">
                  <div>
                    <strong>{project.caseStudy.problem.label}</strong>
                    <p>{project.caseStudy.problem.text}</p>
                  </div>
                  {project.caseStudy.solution && (
                    <div>
                      <strong>{project.caseStudy.solution.label}</strong>
                      <p>{project.caseStudy.solution.text}</p>
                    </div>
                  )}
                  {project.caseStudy.myContribution && (
                    <div>
                      <strong>{project.caseStudy.myContribution.label}</strong>
                      <p>{project.caseStudy.myContribution.text}</p>
                    </div>
                  )}
                  {project.caseStudy.keyFeatures && (
                    <div>
                      <strong>{project.caseStudy.keyFeatures.label}</strong>
                      <p>{project.caseStudy.keyFeatures.text}</p>
                    </div>
                  )}
                  {project.caseStudy.keyWork && (
                    <div>
                      <strong>{project.caseStudy.keyWork.label}</strong>
                      <p>{project.caseStudy.keyWork.text}</p>
                    </div>
                  )}
                  <div>
                    <strong>{project.caseStudy.learned.label}</strong>
                    <p>{project.caseStudy.learned.text}</p>
                  </div>
                </div>
                <ProjectLinks
                  links={project.links}
                  className={cn(
                    "hide-above-lg",
                    project.imagePosition === "last"
                      ? "button-row-right"
                      : "button-row",
                  )}
                />
                {project.note && <p className="project-note">{project.note}</p>}
              </div>
            );

            return (
              <article className="project-feature" key={project.id}>
                {project.imagePosition === "first" ? (
                  <>
                    {image}
                    {content}
                  </>
                ) : (
                  <>
                    {content}
                    {image}
                  </>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

const ProjectLinks = ({
  links,
  className,
}: {
  links: { label: string; href: string }[];
  className: string;
}) => {
  return (
    <div className={className}>
      {links.map((link) => (
        <a
          className={`button ${link.label === "Live Demo" ? "button-dark" : "button-outline"}`}
          href={link.href}
          key={link.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label} <ArrowUpRight />
        </a>
      ))}
    </div>
  );
};
