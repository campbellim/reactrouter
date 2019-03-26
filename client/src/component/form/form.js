
import React from "react";

export function input(props){
    return (
        <div className="form-group">
            <input className="form-control" {...props}/>
        </div> 
    );
}

export function formBtn(props){
    return (
        <button {...props} style={{float: "right", marginBottom: 15}} className="btn btn-success">
            {props.children}
        </button>
    );
}