import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useSelector , useDispatch} from 'react-redux';
import {useState} from "react";
import {setModal} from "./../../store/actions/statusActions";
import firebase from "./../../config/firebaseConfig";

export default function FormDialog() {
  
    const [question, setquestion] = useState("");
    const dispatch = useDispatch();
    const modalStatus = useSelector((state)=>state.statusReducer.showModal);
    const user = useSelector((state)=>state.userReducer.currentUser);

    const handleChange = (e)=>{
        setquestion(e.target.value)
    }
    const handleSubmit = () => {
        firebase.database().ref("/").child("messageRequests").push({
            question : question,
            uid : user.uid
        })
        dispatch(setModal(false))
    }
  return (
    <div>
      <Dialog open={modalStatus} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ask a question</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Write your question so we can a find a counsellor for you :)
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Question"
            type="text"
            fullWidth
            onChange={(e)=>handleChange(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>dispatch(setModal(false))} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>handleSubmit()} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}