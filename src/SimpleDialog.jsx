
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import { Button, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '15ch',
      },
    },
    button:{
        width: '10px' 
    }  
}));

export default function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;
  
    const handleClose = () => {
      onClose(selectedValue);
    };
  
    const handleDialogClose = (value) => {
      onClose(value);
    };
    const add=()=>{
        props.addACountry();
        handleClose();
    }
    return (
      <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Add a Country</DialogTitle>
        <DialogContent>
        <TextField margin="dense" fullWidth id="standard-basic" label="Country" onChange={props.handleCountry}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={add} color="primary">
            Add
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };