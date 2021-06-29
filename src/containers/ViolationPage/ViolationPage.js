import { withStyles } from "@material-ui/styles";
import { styles } from "./ViolationPage.style";
import BlockIcon from '@material-ui/icons/Block';

const ViolationPage = ({classes}) => {
    return ( 
        <div className={classes.container}>
            <div className={classes.subContainer}>
                <BlockIcon className={classes.icon}/>
                <div className={classes.errorMessage}>
                    Sorry, You Have Been Blocked!

                </div>

            </div>

        </div>

     );
}
 
export default withStyles(styles)(ViolationPage);