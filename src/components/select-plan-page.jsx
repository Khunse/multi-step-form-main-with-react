import React from "react";
import Planfe from "./plan-com";

export default function SelectPlanPage(props){

    let {info} = props.obj;

    let style={
        'color': props.yearly ? 'hsl(213, 96%, 18%)': 'hsl(231, 11%, 63%)'
    }

    let style2={
        'color': props.yearly? "hsl(231, 11%, 63%)": 'hsl(213, 96%, 18%)'
    }

    let style3={
        'margin-left': props.yearly ? 'auto': '0'
    }
    return(
        <div className="select-plan-page">
            <h1>{info}</h1>
            <p>
                You have the option of monthly or yearly billing.
            </p>
            <div className="plans">
                
                    {
                        props.plans.map(w=>{
                            return <Planfe key={w.id} yearly={props.yearly} obj={w} chooseplan={props.chooseplan}/>
                        })
                    }
                </div>
            
            <div className="plan-duration" onClick={props.changeyearly}>
                <h2 style={style2}>Monthly</h2>
                <div className="__plan-duration-radio">
                    <div className="item" style={style3}></div>
                </div>
                <h2 style={style}>Yearly</h2>
            </div>
        </div>
    )
}