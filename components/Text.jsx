import PropTypes from "prop-types";

const Text = (props) => {
  const { className = "", children, type } = props;

  if (type === "title" || type === "h1") {
    return (
      <h1 {...props} className={className}>
        {children}
      </h1>
    );
  }

  if (type === "h2") {
    return (
      <h2 {...props} className={className}>
        {children}
      </h2>
    );
  }

  if (type === "h3" || type === "subtitle") {
    return (
      <h3 {...props} className={className}>
        {children}
      </h3>
    );
  }
  if (type === "h4") {
    return (
      <h4 {...props} className={className}>
        {children}
      </h4>
    );
  }
  if (type === "h5") {
    return (
      <h5 {...props} className={className}>
        {children}
      </h5>
    );
  }

  if (type === "span") {
    return (
      <span {...props} className={className}>
        {children}
      </span>
    );
  }

  return (
    <p {...props} className={className}>
      {children}
    </p>
  );
};

export default Text;

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(["span", "p", "title", "h1", "h2", "h3", "h4", "h5", "subtitle"]).isRequired,
  onClick: PropTypes.func,
};

Text.defaultProps = {
  children: "",
  className: "",
  type: "p",
  onClick: () => {},
};
