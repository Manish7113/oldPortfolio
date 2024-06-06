import './Heading.css';
export default function Heading() {
 
    return (
        <div id="parent">
            {/* <p id='name'>Manish</p> */}
            <div id='logo'>
                <img src="https://www.nicepng.com/png/detail/261-2610612_starting-price-manish-photography-logo.png" alt='logopic' id='logopic' ></img>
            </div>
            <div id="links">
              
                <a href=".back" alt="">Home</a>
                <a href="#parent_service" alt="">Services</a>
                <a href="#About_parent" alt="">About me</a>
                <a href="https://www.freepik.com/free-photos-vectors/laptop-plant/2" alt="">Projects</a>

                <a href="https://drive.google.com/file/d/1-iEzfAniPZQ5o-ePo-Dw9k_tBuSAhvIQ/view?usp=sharing" alt="" target='_blank'>Resume</a>
                <a href="#parent_contact" alt="">Contact</a>

            </div>
        </div>
    );
}