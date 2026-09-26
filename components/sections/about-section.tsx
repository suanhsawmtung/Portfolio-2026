import SectionLabel from "@/components/section-label";

const AboutSection = () => {
  return (
    <section className="intro section-border" id="about">
      <div className="container two-column">
        <SectionLabel number="01" label="About me" />
        <div className="reading-column">
          <h2>An evolving engineering journey.</h2>
          <p className="mb-3">
            My academic journey began in Petroleum Engineering at Thanlyin
            Technological University in Myanmar. During that period, I developed
            a growing interest in programming and software development.
          </p>
          <p className="mb-3">
            Over time, that interest became a serious career direction. I began
            developing web applications, working on freelance projects, and
            eventually joining professional software development teams.
          </p>
          <p>
            Today, I work across frontend and backend development. I am now
            interested in pursuing a Bachelor&apos;s degree in Software
            Engineering abroad to strengthen my foundations while continuing to
            grow through practical development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
