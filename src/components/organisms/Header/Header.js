import { styles } from './Header.style';
import { withStyles } from '@material-ui/styles';
import CustomButton from '../../atoms/CustomButton/CustomButton'
// import BackIcon from '../../atoms/BackIcon/BackIcon'
import { withRouter } from "react-router";


const Header = ({ classes, history, ...props}) => {

    const gotoChats = ()=>{
        history.push({
            path:"/",
            search : "?section=chats"
        })
    }

    const gotoRequests = ()=>{
        history.push({
            path:"/",
            search : "?section=requests"
        })
    }



    return (
        <div className={classes.headContainer}>
            {props.children}
            <div className={classes.buttonContainer}>
            <CustomButton text="Chats" onClick={()=>gotoChats()}/>
            <CustomButton text="Requests" onClick={()=>gotoRequests()}/>

            </div>
                    
        </div>

    );
}

export default withStyles(styles)(withRouter(Header));