import { ArrowUpRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="split-cta section-border">
      <div className="container cta-grid">
        <Cta
          title="Academic profile"
          text="Explore my academic background, transition into software development, professional experience, and goals for studying abroad."
          href="#academic"
          label="View Academic Profile"
        />
        <Cta
          title="Engineering work"
          text="Explore the software I have built, the technologies I work with, and my professional development experience."
          href="#projects"
          label="View Projects"
        />
      </div>
    </section>
  );
};

export default CtaSection;

const Cta = ({
  title,
  text,
  href,
  label,
}: {
  title: string;
  text: string;
  href: string;
  label: string;
}) => {
  return (
    <div className="cta">
      <p className="eyebrow">{title}</p>
      <p>{text}</p>
      <a className="text-link" href={href}>
        {label} <ArrowUpRight />
      </a>
    </div>
  );
};
