import PropTypes from "prop-types";
import { NumericFormat } from "react-number-format";

const CurrencyInput = ({ label, value, onValueChange, placeholder }) => {
  return (
    <label>
      <span className="hover:cursor-pointer">{label}</span>
      <NumericFormat
        placeholder={placeholder}
        value={value}
        onValueChange={(res) => onValueChange(res.floatValue)}
        thousandSeparator=","
        className="w-full px-3 py-3 border-2 rounded-lg outline-none  border-slate-200 focus:border-sky-500"
      />
    </label>
  );
};

export default CurrencyInput;

CurrencyInput.propTypes = {
  value: PropTypes.number,
  onValueChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
};

CurrencyInput.defaultProps = {
  onValueChange: () => {},
  label: "",
};
