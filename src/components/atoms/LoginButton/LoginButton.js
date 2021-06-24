import Button from "@material-ui/core/Button";
import { styles } from "./LoginButton.style";
import { withStyles } from "@material-ui/styles";
import {signIn} from "./../../../store/services/authServices";
import {useDispatch} from "react-redux";

const LoginButton = ({ classes }) => {
  const dispatch = useDispatch();

  return (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      size="small"
      onClick={()=>dispatch(signIn())}
    >
      <img
        class={classes.icon}
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
      />{" "}
      Login with Google
    </Button>
  );
};

export default withStyles(styles)(LoginButton);
