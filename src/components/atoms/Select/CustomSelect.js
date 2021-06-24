import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

function CustomSelect({
  onChange,
  name,
  value,
  helperText,
  label,
  value1,
  value2,
}) {

    return (
        <FormControl>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={onChange}
          name={name}
          helperText={helperText}
          
        >
          <MenuItem value={value1} >{value1}</MenuItem>
          <MenuItem value={value2}>{value2}</MenuItem>
        </Select>
      </FormControl>
    );
}

export default CustomSelect;