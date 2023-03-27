import React from 'react';
import  ReactDOM  from 'react-dom';
import classes from './Modal.module.css';

const Backdrop =props=>{

    return <div onClick={props.onClose} className={classes.backdrop}/>

};

const Modaloverlay=props=>{
return <div className={classes.modal}>
    <div className={classes.content}>
        {props.children}
    </div>
</div>

}

const portalElement=document.getElementById("overlays");

const Modal=props=>{

return <>
{ReactDOM.createPortal(<Backdrop onClose={props.onClose} />,portalElement )}
{ReactDOM.createPortal(<Modaloverlay>{props.children}</Modaloverlay>,portalElement)}


</>

}

export default Modal;