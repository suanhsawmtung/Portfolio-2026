import { Download } from "lucide-react";

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
