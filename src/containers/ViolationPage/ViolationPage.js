import { withStyles } from "@material-ui/styles";
import { styles } from "./ViolationPage.style";
import BlockIcon from '@material-ui/icons/Block';
import { signOut } from "../../store/services/authServices";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const ViolationPage = ({classes}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(()=>{
            dispatch(signOut());
        },3000);
    }, [])

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