import { styles } from './RolePage.style';
import { withStyles } from '@material-ui/styles';
import FormContainer from '../../components/organisms/FormContainer/FormContainer'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

const HomeSubContainer = ({ classes }) => {

    return (
        <div className={classes.container}>
            <Card className={classes.subContainer}>
                <Grid >
                    <FormContainer />
                </Grid>

            </Card>



        </div>
    );
}

export default withStyles(styles)(HomeSubContainer);