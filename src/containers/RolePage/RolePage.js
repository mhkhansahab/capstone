import { styles } from './RolePage.style';
import { withStyles } from '@material-ui/styles';
import FormContainer from '../../components/organisms/FormContainer/FormContainer'
import Card from '@material-ui/core/Card';


const HomeSubContainer = ({ classes }) => {

    return (
        <div className={classes.container}>
<<<<<<< HEAD
            <div className={classes.background}></div>
            <FormContainer/>
=======
            {/* <div className={classes.background}>
            </div> */}
            {/* <Card className={classes.subContainer}> */}
            <FormContainer />


            {/* </Card> */}

            
>>>>>>> bfb9c52273a1363f4fced8304b28cd8b1f71cf84
        </div>
    );
}

export default withStyles(styles)(HomeSubContainer);