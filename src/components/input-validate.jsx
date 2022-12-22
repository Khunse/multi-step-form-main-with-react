import React from "react";


export default function Inputval(){


    return(
        <div>
                            <label htmlFor="name-in">Name</label><br />
                            <input type="text" name='username'
                            onChange={chtxt} id="name-in" placeholder="e.g.Stephen King" required/>
                        </div>
    )

}