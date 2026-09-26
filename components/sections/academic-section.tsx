import SectionLabel from "@/components/section-label";

const AcademicSection = () => {
  return (
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
              Enrolled in 2016 and completed coursework through the fourth year.
              My studies were interrupted in 2020 due to the COVID-19 pandemic
              and nationwide university closures. I have not resumed the program
              since then and subsequently shifted my career focus toward
              software development.
            </p>
          </div>
          <p>
            Although my original academic path was in Petroleum Engineering, my
            professional development gradually moved toward software engineering
            through independent learning, freelance development, and
            professional software development roles.
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
  );
};

export default AcademicSection;
