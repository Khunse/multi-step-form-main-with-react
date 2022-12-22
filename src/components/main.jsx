import React,{useState,useEffect} from "react";
import Steps from "./step";
import PersonalInfo from "./personal-info";
import SelectPlanPage from "./select-plan-page";
import PickAddOn from "./pick-add-ons";
import Summary from "./summary";


export default function MainPage(){

    let [step,setstep] =useState(setservice())

    let [plans,setplans] = useState(addplans())

    
   
    function backtomainpage(){
        setstep(setservice());
        setplans(addplans());
        setaddonfe(addonfeat());
        setyear(false);
        setuserdat(false);
    }
    function addplans(){

        return [
            {id:1,plan:'Arcade',price: 9,check: true},
            {id:2,plan:'Advanced',price: 12,check: false},
            {id:3,plan:'Pro',price: 15,check: false},
        ];
    }

    function setservice(){

        return [
            {id: 1, stepinfo: 'your info', info: 'Personal info', isHeld: true,
            username:'',email:'',phnum: ''},
            {id: 2, stepinfo: 'select plan', info: 'Select your plan', isHeld: false},
            {id: 3, stepinfo: 'add-ons', info: 'Pick add-ons', isHeld: false},
            {id: 4, stepinfo: 'summary', info: 'Finishing up', isHeld: false}
        ];
    }
    let [year,setyear] =useState(false);

    function changeyearly(){
        setyear(a=>!a);
    }
    
    useEffect(()=>{

        // console.log('testing in use effect!!!');
        if(year){
            setplans(w=>{
                return w.map(s=>{
                    return {...s,price: s.price*10}
                })
            })

            setaddonfe(w=>{
                return w.map(s=>{
                    return {...s,price: s.price*10}
                })
            })
        }else{

            setplans(addplans())
            setaddonfe(addonfeat())
        }
    },[year]);

function changeStep(obj){
    

    setstep(w=>{
        return w.map(s=>{
            return s.id == obj.id ? {...s,isHeld: true} : {...s,isHeld: false};
        })
    })

}

function backstep(obj){
    setstep(w=>{
        return w.map(s=>{
            return s.id == obj.id-1 ? {...s,isHeld: true} : {...s,isHeld: false};
        })
    })
}



function chooseplan(e){
setplans(w => {
    return w.map(s=>{
        return s.id == e.id ?{...s,check: true} : {...s,check: false};
    })
})


}

//current obj
let currentobj= step.filter(w=> w.isHeld)[0];

let [turnpage,setturnpage] = useState(false);

let [userdata,setuserdat] = useState(true);
//next step button
function nextStep(obj){


    // if(obj.id==1){
    //     addpersoninfo()   
    // }
   if(obj.id<step.length){
        setstep(w=>{
            return w.map(s=>{
                return s.id == obj.id+1 ? {...s,isHeld: true} : {...s,isHeld: false};
            })
        })
    }
    }


let [addonfe,setaddonfe]= useState(addonfeat())
function addon(e){
    setaddonfe(w => {
        return w.map(s=>{
            return s.id == e.target.id ? {...s,check: !s.check} : s;
        })
    })
    
}

function addonfeat(){

    return [
    {id: 1,feature: 'Online service',price: 1,
    infofeat: 'Access to multiplayer games',check: false},
    {id: 2,feature: 'Larger storage',price: 2,
    infofeat: 'Extra 1TB of cloud save',check: false},
    {id: 3,feature: 'Customizable Profile',price: 2,
    infofeat: 'Custom theme on your profile',check: false}
];
}

function addpersoninfo(e,b){

    console.log(e,b);
   setstep(w=>{
    return w.map(s=>{
        
         if(s.id==b.id) {
            
          return  {...s,[e.target.name]: e.target.value};
        }
        else{
            return s;
        }
    })
   })

}

let stepsides = step.map(w=>{
    return <Steps key={w.id} obj={w} evenHan={changeStep}/>
})
    
let abc;
plans.map(w=>{

    return w.check ? abc=w: w;
})

let infoside = step.map(w=>{
    if(w.isHeld){
        switch(w.id){
            case 1:
                return <PersonalInfo 
                   
                    chanEve={addpersoninfo}
                key={w.id} obj={w}
                changeyearly={changeyearly}
                btnNext={()=>nextStep(currentobj)}/>;

            case 2:
                return <SelectPlanPage yearly={year}
                backstep={backstep}
                chooseplan={chooseplan}
                changeyearly={changeyearly}
                plans={plans}
                nextStep={nextStep}
                key={w.id} obj={w}/>;

            case 3:
                return <PickAddOn yearly={year}
                backstep={backstep}
                addon={addon}
                nextStep={nextStep} mobj={w}
                key={w.id} obj={addonfe}/>;

            case 4:
                return <Summary turnpage={turnpage}
                backtomainpage={backtomainpage}
                backstep={backstep}
                addonfe={addonfe} yearly={year}
                 key={w.id} pobj={abc} obj={w}/>
        }
    }
})

console.log(currentobj);

    return(
       
            <div className="container-main">
                <main className="main-com">
            
                    <div className="step-sides">
                        {
                           stepsides
                        }
                    </div>
                    <div className="row-info">
                        <div className="info-side">
                            {
                                infoside
                            }
                         
                         {
                        !turnpage && <div className="btn-in">
                        
                        {
                            currentobj.id>1 && <button className="btn-i btn-1" onClick={()=>backstep(currentobj)}>Go Back</button>
                            }

<button className="btn-i btn-2" onClick={()=>nextStep(currentobj)}>{
currentobj.id<4 ? 'Next step' : 'Confirm'
}</button>
                    </div>
                    }
                        
                        </div>
                       
                    </div>
                </main>
                        
                    {
                        !turnpage && <div className="btn">
                        
                        {
                            currentobj.id>1 && <button className="btn-i btn-1" onClick={()=>backstep(currentobj)}>Go Back</button>
                            }

<button className="btn-i btn-2" onClick={()=>nextStep(currentobj)}>{
currentobj.id<4 ? 'Next step' : 'Confirm'
}</button>
                    </div>
                    }
            </div>
        
    )
}