import React, { useState } from 'react';
import './Contact.css';


function mess(){
    document.getElementById('message').style.display = 'none';
    document.getElementById('values').style.display = 'none';
 
}

export default function Contact() {
    const [thank ,setthank] = useState(false);

    function backfun(){
        setthank(false);
        document.getElementById('message').style.display = 'block';
        document.getElementById('values').style.display = 'block';
        document.getElementById('thankyou').style.display = 'none';
        document.getElementById('ok').style.display = 'none';
    
    }





    const [user, setUser] = useState({
        name: "",
        email: "",
        message: "",
    });
    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });

    };

    const postData = async (e) => {
        e.preventDefault();

        const { name, email, message } = user;
        if (name && email && message) {
            const res = await fetch("https://mineportfolio-a0fff-default-rtdb.firebaseio.com/manishport.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }, body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
            }
            );
            if (res) {
                setUser({
                    name: "",
                    email: "",
                    message: "",
                });
                // alert('Thank You For Interaction Keep In Touch');
                setthank(true);
                mess();
          

            }


        }
        else {
            alert("Please fill all data");
        }


    };

    return (
        <div id="parent_contact" className='hide'>
            <p id='head'>Contact</p>
            <div id="values">
                <p className="haeding">
                    Email
                </p>
                <br></br>
                <p className="answer">
                   <a href='mailto:kumawatji7113@gmail.com.com'>kumawatji7113@gmail.com</a>
                </p>
                <br></br>
               
                <p className="haeding">
                    Country
                </p>
                <br></br>
                <p className="answer">
                    India
                </p>
            </div>
            <div id="message" className='hide'>
                <form method="POST">
                    <input type="text" className="inputfeild" value={user.name}
                        onChange={getUserData}
                        placeholder="Name"
                        name='name'
                        autoComplete='off'
                        required
                    ></input>
                    <input type="email" className="inputfeild"
                        value={user.email}
                        onChange={getUserData}
                        placeholder="Email"
                        name='email'
                        autoComplete='off'
                        required></input>
                    <textarea id='work'
                        value={user.message}
                        onChange={getUserData}
                        placeholder='Enter your Message'
                        name='message'></textarea>
                    <br></br>
                    <button id="done_button" onClick={postData}>Done</button>
                </form>
            </div>
            {thank?<div id='divv'>
                <p id='thankyou'>
                    Thank you for contacting <br></br>
                    Keep in touch
                </p>
                <button id='ok' onClick={backfun}>Back</button>
            </div>:null}

        </div>



    );
}