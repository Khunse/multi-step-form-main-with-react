import React from "react";


export default function Features(props){

    let {yearly} = props;

    let style = {'border': props.obj.check ? '1px solid hsl(243, 100%, 62%)' : '1px solid hsl(229, 24%, 87%)',
'backgroundColor' : props.obj.check ? 'hsl(217, 100%, 97%)': 'transparent'};
    return(
        <div className="feature" >
                    
        <label htmlFor={props.obj.id}  style={style}>
        <input type="checkbox" onChange={props.addon} name={props.obj.feature} id={props.obj.id} checked={props.obj.check}/>
            <div className="feature-box-add">
                <div className="feature-box-add-item">
                    <p>{props.obj.feature}</p>
                    <small>{props.obj.infofeat}</small>
                </div>
                <small>+${props.obj.price}/{yearly ? 'yr' : 'mo'}</small>
            </div>
        </label>
    </div>
    )
}