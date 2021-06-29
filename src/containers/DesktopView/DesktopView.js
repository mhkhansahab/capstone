import { withStyles } from "@material-ui/styles";
import { styles } from "./DesktopView.style";
import ContactPage from "../ContactPage/ContactPage";
import ChatLayout from "../ChatLayout/ChatLayout";


const DesktopView = ({ classes }) => {
    return (
        <div className={classes.container}>
            <div className={classes.subContainer}>
                <ContactPage />
                <ChatLayout />
            </div>

        </div>

    );
}

export default withStyles(styles)(DesktopView);