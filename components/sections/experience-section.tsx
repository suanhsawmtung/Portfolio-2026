import SectionLabel from "@/components/section-label";

const ExperienceSection = () => {
  return (
    <section className="experience section-border" id="experience">
      <div className="container two-column">
        <SectionLabel number="03" label="Experience" />
        <div className="timeline">
          <Experience
            title="Software Developer"
            company="株式会社 革新技術"
            meta="Full-time · Osaka, Japan · Remote"
            dates="December 2024 — July 2025"
            tags={["Next.js", "React Native", "Supabase"]}
            description="International professional software development experience, primarily focused on frontend development for both web and mobile applications. Worked with Next.js for web development and React Native for mobile application development. On the backend, used Supabase to develop and integrate APIs and backend functionality."
          />
          <Experience
            title="Web Developer"
            company="Creative Coder Myanmar"
            meta="Full-time · Yangon, Myanmar · On-site"
            dates="August 2023 — March 2024"
            tags={["Laravel", "Vue.js"]}
            description="Worked primarily as a Laravel and Vue.js developer, focusing on feature development and error debugging for the Creative Coder Learning Platform. Through this experience, I gained hands-on exposure to collaborative workflows and project management tools."
          />
          <Experience
            title="Web Developer"
            company="Freelance"
            meta="Yangon, Myanmar · Remote"
            dates="February 2023 — June 2023"
            tags={["Laravel", "Vue.js"]}
            description="Developed and maintained three Laravel-Vue.js projects, including implementing designs, adding features, and fixing bugs. This experience introduced me to real-world project collaboration and strengthened my practical development skills."
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

const Experience = ({
  title,
  company,
  meta,
  dates,
  tags,
  description,
}: {
  title: string;
  company: string;
  meta: string;
  dates: string;
  tags: string[];
  description: string;
}) => {
  return (
    <article className="experience-item">
      <div className="experience-dates">{dates}</div>
      <div>
        <p className="eyebrow">{meta}</p>
        <h3>{title}</h3>
        <p className="company">{company}</p>
        <p>{description}</p>
        <div className="tag-list">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
};
