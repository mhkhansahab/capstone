import { styles } from './RequestList.style';
import { withStyles } from '@material-ui/styles';


const RequestList = ({ classes, name, question, onClick, showMine }) => {
    return (
        <div className={classes.contactContainer}>
            <div className={classes.titleBtnContainer}>
                <div className={classes.titleContainer}>
                    <div className={classes.subTitle}>Chat with:</div>
                    <div className={classes.title}>{name}</div>
                </div>
                <div className={classes.btnContainer}>
                    {
                        !showMine
                            ?
                            <div className={classes.btn} onClick={onClick}>Accept</div>
                            :
                            <div className={classes.disabled}>Pending</div>
                    }
                </div>
            </div>
            <div className={classes.question}>{question}</div>
        </div>
    );
}

export default withStyles(styles)(RequestList);