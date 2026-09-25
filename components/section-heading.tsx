const SectionHeading = ({
  number,
  title,
  intro,
}: {
  number: string;
  title: string;
  intro: string;
}) => {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{number}</p>
        <h2>{title}</h2>
      </div>
      <p>{intro}</p>
    </div>
  );
};

export default SectionHeading;
