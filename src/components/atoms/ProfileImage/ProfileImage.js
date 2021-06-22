import { withStyles } from '@material-ui/styles';
import { styles } from './ProfileImage.style';


const ProfileImage = ({ classes }) => {
    return (

        <div className={classes.container}>
            <img src="https://picsum.photos/200/300" alt="" className={classes.image}>
            </img>
        </div>

    );
}

export default withStyles(styles)(ProfileImage);