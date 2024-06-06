import { useState } from 'react';
import './Service.css';
// import { webdesing } from './servicejs';
export default function Service() {
    function webdesing() {
        document.getElementById("appdesign").style.display = 'none';
        document.getElementById("uidesign").style.display = 'none';

        setshow(true);
    }
    function appdesign() {
        document.getElementById("webdesign").style.display = 'none';
        document.getElementById("uidesign").style.display = 'none';

        setapp(true);
    }
    function uidesign() {
        document.getElementById("webdesign").style.display = 'none';
        document.getElementById("appdesign").style.display = 'none';

        setui(true);
    }
    function back() {
        document.getElementById("webdesign").style.display = 'flex';
        document.getElementById("appdesign").style.display = 'flex';
        document.getElementById("uidesign").style.display = 'flex';
        setshow(false);
        setapp(false);
        setui(false);
    }

    const [show, setshow] = useState(false);
    const [app, setapp] = useState(false);
    const [ui, setui] = useState(false);
    return (
        <div id="parent_service" className='parallax bg'>
            <div id='heading0' >
                <p id="heading">My services</p>
                <p id="desc">what I provide </p>
            </div>

            <div className="container" onClick={webdesing} id='webdesign'>
                <img src='https://png.pngtree.com/png-vector/20190217/ourmid/pngtree-vector-web-icon-png-image_555441.jpg'></img>
                <br></br>
                <p className="contain_head">Web Design</p>
                <p className="contain_desc">Plan, create adnd code internet sites and web pages with modern and artful desings.</p>
                <p className="contain_expand">View Projects</p>           
            </div>

            <div className="container" id='appdesign' onClick={appdesign}>
                <img src='https://w7.pngwing.com/pngs/747/507/png-transparent-mobile-app-development-handheld-devices-computer-icons-smartphone-blue-electronics-hand-thumbnail.png'></img>
                <p className="contain_head">App Design</p>
                <p className="contain_desc">uses programming languages and development skills to create, test, and develop applications on mobile devices.</p>
                <p className="contain_expand">View Projects</p>   
            </div>
            <div className="container" id='uidesign' onClick={uidesign}>
                <img src='https://w7.pngwing.com/pngs/206/420/png-transparent-user-interface-design-user-experience-design-ui-ux-user-interface-design-text-logo-thumbnail.png' alt='imagenot found'></img>
                <p className="contain_head">Ui/Ux design</p>
                <p className="contain_desc">Plan, create adnd code internet sites and web pages with modern and artful desings.</p>
                <p className="contain_expand">View Projects</p>   
            </div>
            {show ? <div id='linkk'>
                <h2 >Hosted Webistes </h2> <a target='_blank' rel='project' href='https://ai-app-9a040.web.app'>https://ai-app-9a040.web.app</a>
                <div>
                    <button onClick={back}>Back</button>
                </div>


            </div>


                : null}
            {app ? <div id='linkk'>
                <h2 >App links </h2> <p>No data found</p>
                <div>
                    <button onClick={back}>Back</button>
                </div></div> : null}
            {ui ? <div id='linkk'>
                <h2 >Ui links </h2> <p>No data found</p>
                <div>
                    <button onClick={back}>Back</button>
                </div></div> : null}
        </div>
    )
}