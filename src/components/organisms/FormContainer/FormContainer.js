import Grid from '@material-ui/core/Grid';
import CustomSelect from '../../atoms/Select/CustomSelect';
import AgeInput from '../../atoms/AgeInput/AgeInput';
import LoginButton from '../../atoms/LoginButton/LoginButton';
import { styles } from './FormContainer.style';
import { withStyles } from '@material-ui/styles';
import { useFormik } from 'formik';


const FormContainer = ({ classes }) => {
    const formik = useFormik({
        initialValues: {
            role: '',
            gender: '',
            age: '',
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Grid className={classes.container}>
            <h3 className={classes.heading}>Add Your Information:</h3>
            <form onSubmit={formik.handleSubmit} className={classes.form}>

                <CustomSelect label="Your Role" 
                value1="User" value2="Counselor" 
                value={formik.values.role}
                name="role" 
                onChange={formik.handleChange}
                />
                <CustomSelect label="Your Gender" 
                value1="Male" value2="Female"
                value={formik.values.gender}
                name="gender"
                onChange={formik.handleChange} />
                <AgeInput name="age"
                value={formik.values.age}
                onChange={formik.handleChange}
                 />
                <LoginButton text="Submit" type="Submit">
                </LoginButton>
            </form>


        </Grid>
    );
}

export default withStyles(styles)(FormContainer);