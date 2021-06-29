import { styles } from "./HomeSubContainer.style";
import { withStyles } from "@material-ui/styles";
import logo from "./../../../assets/rahbar-logo.png";

const HomeSubContainer = ({ classes }) => {
  return (
    <div className={classes.subContainer}>
      <div className={classes.logoContainer}>
        <img src={logo}></img>
      </div>

      <div className={classes.description}>
        Get in touch with professional licensed counselors to heal your mind from the everyday worries.
      </div>
    </div>
  );
};

export default withStyles(styles)(HomeSubContainer);
