import './About.css';
import App from '../App.css';
export default function About(){
    return(
       <div id="About_parent" className='no_parallax'>
        <div id='blank'>
            
        </div>
        
        <div id="description">
            <p id='question'>So, who am I?</p>
            <p id='theory'>I am Manish kumawat & a web developer, who designs, builds, and maintains websites and web applications. I use a variety of programming languages, frameworks, and technologies to create websites and web applications that are both functional and visually appealing. </p>

        </div>
        <div id="photo">
            <img src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg" alt='self '></img>

        </div>
        

       </div>
    );
}