import { styles } from './CounselorContact.style';
import { withStyles } from '@material-ui/styles';
import Header from '../../components/organisms/Header/Header'
import CustomButton from '../../components/atoms/CustomButton/CustomButton';
import CounselorFooter from '../../components/molecules/CounselorFooter/CounselorFooter'


const CounselorContact = ({ classes }) => {
    return (
        <div className={classes.contactContainer}>
            <Header />
            <div className={classes.listContainer}>


            </div>

            <CounselorFooter />



        </div>

    );
}

export default withStyles(styles)(CounselorContact);