const SectionLabel = ({ number, label }: { number: string; label: string }) => {
  return (
    <div className="section-label">
      <span>{number}</span>
      <p>{label}</p>
    </div>
  );
};

export default SectionLabel;
