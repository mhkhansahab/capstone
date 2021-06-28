import Button from "@material-ui/core/Button";
import { styles } from "./CustomButton.style";
import { withStyles } from "@material-ui/styles";

const CustomButton = ({ classes, text, type, onClick , ...props }) => {

  return (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      size="small"
      onClick={onClick}
    >
      {props.children}
      {text}
    </Button>
  );
};

export default withStyles(styles)(CustomButton);
