import PropTypes from "prop-types";

const Button = ({ className, children, onClick, type, disabled, isLoading }) => {
  if (type === "outlined") {
    return (
      <button onClick={onClick} disabled={disabled} className={`btn-outlined ${disabled && "opacity-50"} ${className}`}>
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-sky-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {children}
      </button>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={`btn ${disabled && "opacity-50"} ${className}`}>
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(["primary", "outlined"]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: "Button",
  className: "",
  type: "primary",
  onClick: () => {},
};
