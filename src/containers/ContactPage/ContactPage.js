import { withStyles } from '@material-ui/styles';
import { styles } from './ContactPage.style';
import ContactList from '../../components/molecules/ContactList/ContactList';
import ContactFooter from '../../components/molecules/ContactFooter/ContactFooter';
import Header from '../../components/organisms/Header/Header';


const ContactPage = ({classes}) => {
    return ( 
        <div className={classes.contactContainer}>
            <div className={classes.head}>
            <Header/>
            <h3>Chats</h3>
            </div>
            <div className={classes.listContainer}>
            <ContactList/>
            <ContactList/>
            <ContactList/>
            <ContactList/>
            <ContactList/>
            <ContactList/>
            <ContactList/>
            <ContactList/>
            <ContactList/>
            <ContactList/>
            <ContactList/>

            </div>
            
            <ContactFooter/>

        </div>
     );
}
 
export default withStyles(styles)(ContactPage);