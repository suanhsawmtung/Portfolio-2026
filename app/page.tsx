import Header from "@/components/header";
import ProjectSection from "@/components/sections/project-section";
import { ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";

const skills = {
  Languages: ["TypeScript", "JavaScript", "PHP"],
  Frontend: ["React", "Next.js", "Vue.js"],
  Backend: ["Node.js", "Express.js", "Laravel"],
  Mobile: ["React Native"],
  "Tools / Collaboration": ["Git", "GitHub", "Jira", "Trello", "Slack"],
};

export default function Page() {
  return (
    <main>
      <Header />

      <div id="top" />
      <section className="hero container">
        <div className="hero-photo">
          <Image
            src="/profile.png"
            alt="Professional portrait of Suanh Sawm Tung"
            fill
          />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">
            Software Developer · Full-Stack Web & Mobile
          </p>
          <h1>
            Suanh Sawm Tung <em>(Augustine)</em>
          </h1>
          <p className="hero-lede">
            Building practical software through real-world experience,
            independent projects, and continuous learning.
          </p>
          <p className="hero-body">
            I&apos;m a software developer from Myanmar with professional
            experience building web and mobile applications. My journey began in
            engineering, and I am now pursuing a deeper academic foundation in
            Software Engineering.
          </p>
          <div className="button-row">
            <a className="button button-dark" href="#projects">
              View Projects <ArrowUpRight />
            </a>
            <a className="button button-outline" href="#academic">
              Academic Profile
            </a>
            <a
              className="text-link"
              href="/augustine-cv.pdf"
              download="augustine-cv.pdf"
            >
              Download CV <Download />
            </a>
          </div>
        </div>
        <div className="hero-note">
          <span>Based in Yangon, Myanmar</span>
          <span>Open to new opportunities</span>
        </div>
      </section>

      <section className="intro section-border" id="about">
        <div className="container two-column">
          <SectionLabel number="01" label="About me" />
          <div className="reading-column">
            <h2>An evolving engineering journey.</h2>
            <p className="mb-3">
              My academic journey began in Petroleum Engineering at Thanlyin
              Technological University in Myanmar. During that period, I
              developed a growing interest in programming and software
              development.
            </p>
            <p className="mb-3">
              Over time, that interest became a serious career direction. I
              began developing web applications, working on freelance projects,
              and eventually joining professional software development teams.
            </p>
            <p>
              Today, I work across frontend and backend development. I am now
              interested in pursuing a Bachelor&apos;s degree in Software
              Engineering abroad to strengthen my foundations while continuing
              to grow through practical development.
            </p>
          </div>
        </div>
      </section>

      <ProjectSection />

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

      <section className="academic section-border" id="academic">
        <div className="container two-column">
          <SectionLabel number="04" label="Academic journey" />
          <div className="reading-column">
            <h2>From engineering to software engineering.</h2>
            <div className="academic-entry">
              <p className="eyebrow">Education · 2016 — 2020</p>
              <h3>Thanlyin Technological University</h3>
              <p className="degree">
                Bachelor of Engineering (BE) — Petroleum Engineering
              </p>
              <p>
                Enrolled in 2016 and completed coursework through the fourth
                year. My studies were interrupted in 2020 due to the COVID-19
                pandemic and nationwide university closures. I have not resumed
                the program since then and subsequently shifted my career focus
                toward software development.
              </p>
            </div>
            <p>
              Although my original academic path was in Petroleum Engineering,
              my professional development gradually moved toward software
              engineering through independent learning, freelance development,
              and professional software development roles.
            </p>
            <div className="credentials">
              <div>
                <p className="eyebrow">Credentials</p>
                <p>Myanmar Matriculation Examination</p>
                <p>Japanese Language Proficiency Test (JLPT) N4</p>
              </div>
              <div>
                <p className="eyebrow">Languages</p>
                <p>English — actively improving communication skills</p>
                <p>German — studying at approximately A1.1 level</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills section-border" id="skills">
        <div className="container two-column">
          <SectionLabel number="05" label="Engineering toolkit" />
          <div className="skill-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div className="skill-group" key={category}>
                <p className="eyebrow">{category}</p>
                <div>
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="interests section-border">
        <div className="container two-column">
          <SectionLabel number="06" label="Currently exploring" />
          <div className="reading-column">
            <h2>Learning beyond the application layer.</h2>
            <p>
              Currently building personal projects while strengthening my
              software engineering foundations and exploring modern development
              practices, infrastructure, and system design.
            </p>
            <div className="interest-list">
              {[
                "Docker",
                "CI/CD",
                "Redis",
                "Testing",
                "Cloud Deployment",
                "Data Structures & Algorithms",
              ].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="goals section-border" id="goals">
        <div className="container two-column">
          <SectionLabel number="07" label="Where I'm going" />
          <div className="goal-copy">
            <h2>A stronger foundation for meaningful work.</h2>
            <div className="space-y-4">
              <p>
                My immediate academic goal is to pursue a Bachelor&apos;s degree
                in Software Engineering abroad and build a stronger foundation
                in computer science, software engineering principles,
                algorithms, systems, and modern software development.
              </p>
              <p>
                I want to continue developing as a professional programmer while
                gaining the academic foundation needed to understand software
                beyond individual applications.
              </p>
              <p>
                In the long term, I hope to share what I learn through free
                educational content on platforms such as YouTube and TikTok,
                particularly around programming, software development, and the
                learning journey itself.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      <section className="contact section-border" id="cv">
        <div className="container contact-wrap">
          <div>
            <p className="eyebrow">08 · Let&apos;s connect</p>
            <h2>Open to thoughtful conversations.</h2>
            <p className="muted">
              Whether you’re interested in my work, academic journey, or simply
              want to connect, feel free to reach out.
            </p>
          </div>
          <div className="contact-links">
            <span>
              Email{" "}
              <a
                className="contact-hover-link"
                href="mailto:suanhsawmtung1999@gmail.com"
              >
                <small>suanhsawmtung1999@gmail.com</small>
              </a>
            </span>
            <span>
              GitHub
              <a
                className="contact-hover-link"
                href="https://github.com/suanhsawmtung"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>github.com / suanhsawmtung</small>
              </a>
            </span>
            <span>
              LinkedIn
              <a
                className="contact-hover-link"
                href="https://www.linkedin.com/in/suanhsawmtung/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>linkedin.com / in / suanhsawmtung</small>
              </a>
            </span>
            <a
              className="button button-dark"
              href="/augustine-cv.pdf"
              download="augustine-cv.pdf"
            >
              Download CV <Download />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-wrap">
          <div>
            <strong>
              Suanh Sawm Tung <em>(Augustine)</em>
            </strong>
            <p>Software Developer · Full-Stack Web & Mobile</p>
          </div>
          <p>© {new Date().getFullYear()} Suanh Sawm Tung</p>
        </div>
      </footer>
    </main>
  );
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <p>{label}</p>
    </div>
  );
}
function Experience({
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
}) {
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
}
function Cta({
  title,
  text,
  href,
  label,
}: {
  title: string;
  text: string;
  href: string;
  label: string;
}) {
  return (
    <div className="cta">
      <p className="eyebrow">{title}</p>
      <p>{text}</p>
      <a className="text-link" href={href}>
        {label} <ArrowUpRight />
      </a>
    </div>
  );
}
