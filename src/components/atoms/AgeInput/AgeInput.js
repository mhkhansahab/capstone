import TextField from '@material-ui/core/TextField';
import { styles } from './AgeInput.style';
import { withStyles } from '@material-ui/styles';

const AgeInput = ({
    classes,
    name,
    onChange,
    value,
    error,
    type,
    label,
    helperText}) => {
    return (
        <div>
            <TextField id="standard-basic" label={label} 
            type={type} name={name}
            value={value} onChange={onChange} error={error} helperText={helperText} className={classes.text}/>
        </div>
    );
}

export default withStyles(styles)(AgeInput);