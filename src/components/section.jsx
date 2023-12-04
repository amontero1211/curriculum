import "../assets/css/section.css";

const Section = (props) => {
  return (
    <div className="section">
      <h3>{props.title}</h3>
      <div>{props.children}</div>
    </div>
  );
};

export default Section;
