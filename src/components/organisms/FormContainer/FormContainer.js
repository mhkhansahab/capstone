import Grid from "@material-ui/core/Grid";
import CustomSelect from "../../atoms/Select/CustomSelect";
import AgeInput from "../../atoms/AgeInput/AgeInput";
import LoginButton from "../../atoms/LoginButton/LoginButton";
import { styles } from "./FormContainer.style";
import { withStyles } from "@material-ui/styles";
import { useFormik } from "formik";
import {updateUser} from "./../../../store/services/authServices";
import { useDispatch , useSelector } from "react-redux";
import { setFirstLogin } from "../../../store/actions/statusActions";
import * as yup from 'yup';


const FormContainer = ({ classes }) => {
    
    const dispatch = useDispatch();
    const currentUser = useSelector((state)=>state.userReducer.currentUser);
    const validationSchema = yup.object({
        role: yup
            .string('Select your Role')
            .required('Role is required'),
        gender: yup
            .string('Enter your First Name')
            .required('Name is required'),
        age: yup
            .number('Enter your age')
            .positive('age must be greater than zero')
            .required('Age is required'),
        nickname: yup
            .string('Enter your nick name')
            .required('Nick name is required'),

    });


    const formik = useFormik({
        initialValues: {
            role: '',
            gender: '',
            age: '',
            nickname: ''
        },
        validationSchema, validationSchema,
        onSubmit: (values) => {
            const obj = {
              ...currentUser,
              role : values.role,
              gender : values.gender,
              age : values.age,
              nickname: values.nickname
            }
            dispatch(updateUser(currentUser.uid, obj))
            dispatch(setFirstLogin(false));
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
                    error={formik.touched.role && Boolean(formik.errors.role)}
                    helperText={formik.errors.role && formik.touched.role}
                />
                <CustomSelect label="Your Gender"
                    value1="Male" value2="Female"
                    value={formik.values.gender}
                    name="gender"
                    onChange={formik.handleChange}
                    error={formik.touched.gender && Boolean(formik.errors.gender)}
                    helperText={formik.touched.gender && formik.errors.gender} />

                <AgeInput name="age"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    error={Boolean(formik.errors.age)}
                    helperText={formik.errors.age}
                    type="number"
                    label="Your Age"

                />
                <AgeInput name="name"
                    value={formik.values.nickname}
                    onChange={formik.handleChange}
                    error={Boolean(formik.errors.nickname)}
                    helperText={formik.errors.nickname}
                    label="Your Nick Name"
                />                
                <LoginButton text="Submit" type="Submit">
                </LoginButton>
            </form>
            );
};

export default withStyles(styles)(FormContainer);