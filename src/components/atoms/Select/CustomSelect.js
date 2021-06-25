import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/styles";
import { styles } from "./CustomSelect.style";

function CustomSelect({
  classes,
  onChange,
  name,
  value,
  value1,
  value2,
  label,
  error,
  helperText
}) {

    return (
        <FormControl className={classes.select}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={onChange}
          name={name}
          helperText={helperText}
          error={error}
          
        >
          <MenuItem value={value1} >{value1}</MenuItem>
          <MenuItem value={value2}>{value2}</MenuItem>
        </Select>
      </FormControl>
    );
}

export default withStyles(styles)(CustomSelect);