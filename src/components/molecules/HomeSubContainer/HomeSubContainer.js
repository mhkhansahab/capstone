import { styles } from "./HomeSubContainer.style";
import { withStyles } from "@material-ui/styles";
import logo from "./../../../assets/rahbar-logo3.png";

const HomeSubContainer = ({ classes }) => {
  return (
    <div className={classes.subContainer}>
      <div className={classes.logoContainer}>
        <img src={logo}></img>
      </div>
      <div className={classes.slogan}>Divine Healing!</div>

      <div className={classes.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
        quidem labore error, quaerat tempora explicabo, exercitationem expedita
        animi laudantium fuga mollitia ex, fugiat incidunt porro eius? Nulla
        earum incidunt nesciunt.
      </div>
    </div>
  );
};

export default withStyles(styles)(HomeSubContainer);
