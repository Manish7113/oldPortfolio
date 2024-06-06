import { Component } from 'react';

import './Header1.css';
class Header1 extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <>
                <nav>
                    <a href="index.html" id='logo'>
                        <img src='https://api.logo.com/api/v2/images?logo=logo_8988f7ef-317c-4b4f-a17b-8b9b21610f82&format=webp&margins=0&quality=60&width=500&background=transparent&u=1687329617' id='logopic'></img>
                    </a>
                    <div>
                        <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li><a href=".back" className='active' onClick={this.handleClick}>home</a></li>
                            <li><a href="#About_parent" onClick={this.handleClick}>about-me</a></li>
                            <li><a href="#parent_service" onClick={this.handleClick}>Service</a></li>
                            <li><a href="https://drive.google.com/file/d/16tCKbClb9xa-VIecjEEplQjbIj8Poki1/view?usp=sharing" target='_blank' onClick={this.handleClick}>resume</a></li>
                            <li><a href="#parent_contact" onClick={this.handleClick}>contact</a></li>
                        </ul>
                    </div>
                    <div id='mobile' onClick={this.handleClick}>
                        <i id='bar' className=
                            {this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>


                    </div>
                </nav>
            </>
        );
    }
}
export default Header1;