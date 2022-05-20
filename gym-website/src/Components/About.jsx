import React from 'react';
import aboutimage from '../images/about.png';

function About() {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={aboutimage} alt='aboutimage' />
            </div>
            <div className='about-text'>
                <h1>LEARN MORE ABOUT US</h1>
                <p>We're more than just a gym. We are family.
                    We encourage, we empower, we guide,
                    we belive, we push, we strengthen.
                   We are here to help you achieve your goals.
                    At Fitness & Beyond, our goal is simple:
                   Let us help you <span class="up">Find Your Strength!</span>
                </p>
                <button>
                    READ MORE
                </button>
            </div>
        </div>
    )
}

export default About;