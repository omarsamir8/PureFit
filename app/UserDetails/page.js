export const metadata = {
    title: "User Details",
    description: "Enter Your Details And The Weight You Want To Reach",
  };

  import React from "react";
import './UserDetails.css'
import Link from 'next/link'
export default function UserDetails(){
    return(
        <>
        <div className="UserDetails">
            <h2>Welcom To PureFit Please Fill Out This Form</h2>
            <form>
                <input type='text' placeholder='Your Name'/>
                <input type='number' placeholder='Your Age'/>
                <input type='number' placeholder='Your Hieght'/>
                <input type='number' placeholder='Your Weight'/>
                <input style={{width:"100%"}} type='number' placeholder='The Weight You Want To Reach'/>
                <Link href='/SelectProgram'>
                    <button >Expolre Our Program</button>
                </Link>    
            </form>
        </div>
        </>
    )
}