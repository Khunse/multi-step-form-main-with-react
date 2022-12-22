import React from "react";


export default function PersonalInfo(props){

    let {info,phnum,email,username} = props.obj;

    function chtxt(e){
       console.log(phnum,email,username);
        props.chanEve(e,props.obj)
    }
let b='form-input';
let c='form-validate';



let d=`${b} ${c}`;
    return(

        <div className="personal-info">
            <h1 className="title">{info}</h1>
            <p className="about">
                Please provide your name,email address, and phone number.
            </p>
           
                <form className="personal-form">
                    
                        <div className='form-validate form-input'>
                            <label htmlFor="name-in">Name</label><br />
                            <input type="text" name='username' value={username}
                            onChange={chtxt} id="name-in" placeholder="e.g.Stephen King" required/>
                        </div>
                    
                    <div className="form-validate form-input">
                        <label htmlFor="email">Email Address</label><br />
                        <input type="email" name="email" value={email}
                        placeholder="e.g.stephenking@lorem.com"
                        onChange={chtxt} id="email" required/>
                        
                    </div>
                    <div className="form-validate form-input">
                        <label htmlFor="phone-num">Phone Number</label><br/>
                        <input type="number" value={phnum}
                        placeholder="e.g.+1 234 567 890"
                        name="phnum" onChange={chtxt} id='phone-num' required/>
                        
                    </div>
                    {/* <div className="btn"><button>Nest Step</button></div> */}
                </form>
            
        </div>
    )
}