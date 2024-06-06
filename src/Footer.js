import './Footer.css';
export default function Footer(){
    return(
        <div id='parent_footer'>
            <div className='name'>
                <p className='head'>
                    Manish Kumawat
                </p>
                <p className='desc'>
                    I am a web developer who build, manage and deploy website.
                </p>
            </div>

            <div className='name'>
                <p className='head'>
                    Explore
                </p>
                <p className='desc'>
                <a href=".back" alt="home page">Home</a>
        <a href="#parent_service" alt="">Services</a>
        <a href="#About_parent" alt="">About me</a>
        
        <a href="https://drive.google.com/file/d/18sq4HzAN6V1VZ1Ot7E8hD9kEfoGWTBCz/view?usp=sharing" alt="" target='_blank'>Resume</a>
        <a href="#parent_contact" alt="">Contact</a>

                </p>
            </div>
            <div className='name'>
                <p className='head'>
                    Follow
                </p>
                <p className='desc'>
                <a href='https://www.instagram.com/kumawatmanish7125/' alt='page not found' target='_blank'><img src="https://img.icons8.com/?size=512&id=32323&format=png"></img></a>
                <a href='https://www.linkedin.com/in/manish-kumawat-ab15b823a' alt='linked n profile' target='_blank'><img src="https://img.icons8.com/?size=512&id=13930&format=png"></img></a>
                <a href='mailto:kumawatji7113@gmail.com.com' alt='not working' target='_blank'><img src="https://img.icons8.com/?size=2x&id=CXYJjRfKlwI9&format=png"></img></a>
                </p>
            </div>
        </div>
    );
}