import TextField from '@material-ui/core/TextField';

const AgeInput = ({
    name,
    onChange,
    value}) => {
    return (
        <div>
            <TextField id="standard-basic" label="Your Age" 
            type="number" name={name}
            value={value} onChange={onChange} />
        </div>
    );
}

export default (AgeInput);