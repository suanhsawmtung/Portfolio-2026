import { ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="hero container">
      <div className="hero-photo">
        <Image
          src="/profile.png"
          alt="Professional portrait of Suanh Sawm Tung"
          fill
        />
      </div>
      <div className="hero-copy">
        <p className="eyebrow">Software Developer · Full-Stack Web & Mobile</p>
        <h1>
          Suanh Sawm Tung <em>(Augustine)</em>
        </h1>
        <p className="hero-lede">
          Building practical software through real-world experience, independent
          projects, and continuous learning.
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
  );
};

export default HeroSection;
