import { useState } from "react";
import './Exam.css';
export default function Exam() {
    // const [loggedin, setloggedin] = useState(false);
    // function togglefun() {
    //     if (document.getElementById('name').value === '321' && document.getElementById('password').value === '123') {
    //         setloggedin(true);
    //         document.getElementById('name').style.display = 'none';
    //         document.getElementById('password').style.display = 'none';
    //         document.getElementById('butt').innerHTML = 'logout' ;
    //         document.getElementById('butt').style.backgroundColor = 'red' ;
    //         document.getElementById('butt').style.color = 'white' 
    //         document.getElementById('butt').style.display = 'none';
    //     } else if (document.getElementById('name').value !== '321' || document.getElementById('password').value !== '123') {

    //         alert("please enter correct ID passoword");
    //     }


    //     else {
    //         setloggedin(false);
    //     }

    // }
    return (
        <div>
            <A></A>

            {/* {loggedin ? <div id="login_text"> login succesfully <br></br> welcomes you</div> :
                <h2 id="request_text">Enter name and password correct </h2>}

            <input id="name" placeholder="enter your name" type="text"></input>
            <input id="password" placeholder="enter your password" type="password"></input>
            <button id="butt" onClick={togglefun}>Submit</button> */}

        </div>
    );
}
function A() {
    const [showB, setshowB] = useState(false);
    const [text, setText] = useState("");
    
    const [showC , setshowC] = useState(false);
    const handleevent = (event) => {
        setText(event.target.value);
        setshowB(true);
        setshowC(true);
    };
    return (
        <div>
            <input id="name" type="text" onChange={handleevent}></input>
            {showB && <B text={text} />}
            {showC && <C text = {text} />}

        </div>
    );
}
function B(props) {
    const { text } = props;
    var a = 'manish';
    return (
        <div>
            <h2> Upper case : {text.toUpperCase()}</h2>
        </div>
    )
}

function C(props){
    const {text} = props;
    return(
        <div>
            <h2> lower case :  {text.toLowerCase()}</h2>
        </div>
    )
}