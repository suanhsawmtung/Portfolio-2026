import SectionLabel from "@/components/section-label";
const skills = {
  Languages: ["TypeScript", "JavaScript", "PHP"],
  Frontend: ["React", "Next.js", "Vue.js"],
  Backend: ["Node.js", "Express.js", "Laravel"],
  Mobile: ["React Native"],
  "Tools / Collaboration": ["Git", "GitHub", "Jira", "Trello", "Slack"],
};

const SkillSection = () => {
  return (
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
  );
};

export default SkillSection;
