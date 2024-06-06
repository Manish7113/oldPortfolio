import React from 'react';
import Typewriter from 'typewriter-effect';
//  import Typed from 'react-typed';
import './intro.css';
import SettingContext from '../context/settingContext';
import { useContext } from 'react';


export default function Intro() {

    const {setting} = useContext(SettingContext)

    
    return (
        <div className="back">
            <div id='mobile'>
                I am, <br></br>
                Developer<br></br>
            </div>
            <div id="intro">
                <p id="value">
                    I
                    Am <br></br>Developer,

                    <span id='animatedtext'>
                        <Typewriter
                            options={{
                                strings: ['Developing your Website', 'Maintaining your Website'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        
                    </span>

                </p>
            </div>
        </div>
    );
}