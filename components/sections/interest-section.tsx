import SectionLabel from "@/components/section-label";

const InterestSection = () => {
  return (
    <section className="interests section-border">
      <div className="container two-column">
        <SectionLabel number="06" label="Currently exploring" />
        <div className="reading-column">
          <h2>Learning beyond the application layer.</h2>
          <p>
            Currently building personal projects while strengthening my software
            engineering foundations and exploring modern development practices,
            infrastructure, and system design.
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
  );
};

export default InterestSection;
