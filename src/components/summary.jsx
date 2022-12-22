import React,{useState} from "react";
import Thankyou from "./thankyoupage";

export default function Summary(props){

let {info} = props.obj;

let totalprice=props.pobj.price;



let addonfe=props.addonfe.filter(w=> w.check);




    return(
        <div>
            {
               !props.turnpage ? <div className="summary-com">
               <h1>{info}</h1>
               <p>
                   Double-check everything looks OK before confirming.
               </p>
               <div className="confirm-box">
                   <div className="confirm-box-plan">
                       <div className="plan">
                           <h2>{
                              props.pobj.plan
                               } (Monthly)</h2>
                               <span onClick={props.backtomainpage}>Change</span>
                           
                       </div>
                       <small>+${props.pobj.price}/{props.yearly ? 'yr' : 'mo'}</small>
                   </div>
                   {
                       addonfe.length > 0 && 
                       <div className="confirm-box-price">
                           {
                               addonfe.map(w=>{
                                {totalprice+=w.price}
                                   return <div key={w.id} className="confirm-box-fe">
                                       <h3>{w.feature}</h3>
                                       
                                       <small>+${w.price}/{props.yearly ? 'yr' : 'mo'}</small>
                                   </div>
                               })
                           }
                       </div>
                   }
               </div>
               <div className="total-box">
                   <p>
                    Total (per {props.yearly ? 'year' : 'month'})
                   </p>
                   <span>
                    ${totalprice}/{props.yearly ? 'yr' : 'mo'}
                   </span>
               </div>

           </div> : <Thankyou /> 
            }
        </div>
    )
}