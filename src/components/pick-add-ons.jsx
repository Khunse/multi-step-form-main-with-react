import React from "react";
import Features from "./feature";

export default function PickAddOn(props){

    
    let addonfeatures = props.obj.map(w=>{

        return <Features yearly={props.yearly} key={w.id} obj={w} addon={props.addon}/>
    })
    return(

        <div className="pick-add-on-com">
            <h1>{props.mobj.info}</h1>
            <p>
                Add-ons help enhance your gaming experience.
            </p>
            <div className="add-ons-feature-com">
                
                    {
                        addonfeatures
                    }
                
            </div>

        </div>
    )
}