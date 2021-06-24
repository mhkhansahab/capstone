import Button from '@material-ui/core/Button';
import { styles } from './LoginButton.style';
import { withStyles } from '@material-ui/styles';

const LoginButton = ({ classes, text, type, ...props }) => {
  return (
    <Button className={classes.button} variant="contained" color="primary" size="small" type={type}>
      {props.children}
      {text}
    </Button>

  );
}

export default withStyles(styles)(LoginButton);
