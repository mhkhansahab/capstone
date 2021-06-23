import { styles } from './ContactFooter.style';
import { withStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';

const ContactFooter = ({classes}) => {
    return ( 
        <div className={classes.footer}>
            <p>Search Here!</p>
            <SearchIcon/>
        </div>
     );
}
 
export default withStyles(styles)(ContactFooter);