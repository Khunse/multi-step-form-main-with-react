import React from "react";


export default function Steps(props){

let {id,stepinfo,isHeld} = props.obj;

let style={'backgroundColor': isHeld ? 'hsl(206, 94%, 87%)' : 'transparent',
'color': isHeld ? 'hsl(213, 96%, 18%)':'whitesmoke',
'border': isHeld ? 'none' : '1px solid whitesmoke'};


     return(

        <div className="step-com" >
            
                <div className="step-number" style={style}>{id}</div>
                <div className="step-com-about">
                    <p>STEP {id}</p>
                    <h2>{stepinfo}</h2>
                </div>
            
        </div>
    )
}