import { withStyles } from "@material-ui/styles";
import { styles } from "./ContactPage.style";
import ContactList from "../../components/molecules/ContactList/ContactList";
import ContactFooter from "../../components/molecules/ContactFooter/ContactFooter";
import Header from "../../components/organisms/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getYourChats } from "./../../store/services/chatServices";
import { getAllUsers } from "./../../store/services/authServices";

const ContactPage = ({ classes }) => {
  const dispatch = useDispatch();
  const sender = useSelector((state) => state.userReducer.demoCurrentUser);
  const user = useSelector((state)=>state.userReducer.currentUser)

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getYourChats(sender.uid));
  }, []);

  return (
    <>
    {
      !user ?
      <div className={classes.loaderContainer}>
        <div className="loader"></div>
      </div>
      :
      <div className={classes.contactContainer}>
      <div className={classes.head}>
        <Header />
        <h3>Chats</h3>
      </div>
      <div className={classes.listContainer}>
        <ContactList />
        <ContactList />
       
      </div>
      <ContactFooter />
      </div>
    }
    </>
  );
};

export default withStyles(styles)(ContactPage);
