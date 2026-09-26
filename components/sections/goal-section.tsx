import SectionLabel from "@/components/section-label";

const GoalSection = () => {
  return (
    <section className="goals section-border" id="goals">
      <div className="container two-column">
        <SectionLabel number="07" label="Where I'm going" />
        <div className="goal-copy">
          <h2>A stronger foundation for meaningful work.</h2>
          <div className="space-y-4">
            <p>
              My immediate academic goal is to pursue a Bachelor&apos;s degree
              in Software Engineering abroad and build a stronger foundation in
              computer science, software engineering principles, algorithms,
              systems, and modern software development.
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
  );
};

export default GoalSection;
