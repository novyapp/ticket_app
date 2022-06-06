import propTypes from "prop-types";

export default function Header({ text, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Ticket UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#fc7703",
};

Header.propTypes = {
  text: propTypes.string,
  bgColor: propTypes.string,
  textColor: propTypes.string,
};
