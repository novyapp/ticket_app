import React from "react";
import propsTypes from "prop-types";

function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

Button.propsTypes = {
  children: propsTypes.node.isRequired,
  version: propsTypes.string,
  type: propsTypes.string,
  isDisavled: propsTypes.bool,
};
export default Button;
