import TextField from '@material-ui/core/TextField';

const AgeInput = ({
    name,
    onChange,
    value,
    error,
    helperText}) => {
    return (
        <div>
            <TextField id="standard-basic" label="Your Age" 
            type="number" name={name}
            value={value} onChange={onChange} error={error} helperText={helperText}/>
        </div>
    );
}

export default (AgeInput);