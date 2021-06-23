import Button from '@material-ui/core/Button';
import { styles } from './LoginButton.style';
import { withStyles } from '@material-ui/styles';

const LoginButton = ({ classes }) => {
  return (
    <Button className={classes.button} variant="contained" color="primary" size="small">
      <img class={classes.icon} src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/> Login with Google
    </Button>

  );
}

export default withStyles(styles)(LoginButton);
