import { styles } from './ContactFooter.style';
import { withStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';
import { setModal } from '../../../store/actions/statusActions';
import { useDispatch } from 'react-redux';

const ContactFooter = ({classes}) => {
    
    const dispatch = useDispatch();
    
    return ( 
        <div className={classes.footer} onClick={()=>dispatch(setModal(true))}>
            <p>Search Here!</p>
            <SearchIcon/>
        </div>
     );
}
 
export default withStyles(styles)(ContactFooter);