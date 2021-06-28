import TextField from "@material-ui/core/TextField";
import { styles } from "./TextInput.style";
import { withStyles } from "@material-ui/styles";

const TextInput = ({ classes, onChange, onEnter, value }) => {
  return (
    <div>
      <TextField
        id="outlined-basic" label="Your Message..." variant="outlined"
        size="small"
        className={classes.input}
        shrink="false"
        onChange={(e) => onChange(e)}
        value={value}
        onKeyPress={(e) => onEnter(e)}
      ></TextField>
    </div>
  );
};

export default withStyles(styles)(TextInput);
