const Footer = () => {
  return (
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
  );
};

export default Footer;
