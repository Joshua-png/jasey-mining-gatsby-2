import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function Picture({image,alternate,display}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="col mb-4">
        <button className="card h-100" onClick={handleToggle}>
          <img src={image} className="card-img-top shadow" alt={alternate} /> 
        </button>
      </div>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <div className="shadow bg-white p-5 text-black m-3">
                    {display}
                 </div>
      </Backdrop>
    </div>
  );
}
