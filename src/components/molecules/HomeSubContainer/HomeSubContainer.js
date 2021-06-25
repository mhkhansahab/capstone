import { styles } from './HomeSubContainer.style';
import { withStyles } from '@material-ui/styles';

const HomeSubContainer = ({ classes }) => {
    return (
        <div className={classes.subContainer}>
            <h1 className={classes.heading}>RAHBAR</h1>
            <p>Divine Healing!</p>

            <p className={classes.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti quidem labore error, quaerat tempora explicabo, exercitationem expedita animi laudantium fuga mollitia ex, fugiat incidunt porro eius? Nulla earum incidunt nesciunt.
            </p>


        </div>
    );
}

export default withStyles(styles)(HomeSubContainer);