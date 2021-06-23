import TextField from "@material-ui/core/TextField";
import { styles } from "./TextInput.style";
import { withStyles } from "@material-ui/styles";

const TextInput = ({ classes , onChange, value}) => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        className={classes.input}
        shrink="flase"
        onChange = {(e)=>onChange(e)}
        value = {value}
      ></TextField>
    </div>
  );
};

export default withStyles(styles)(TextInput);
