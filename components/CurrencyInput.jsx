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
        className=" py-3 px-3 border-2 border-slate-200 rounded-lg outline-none focus:border-sky-500 w-full"
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
