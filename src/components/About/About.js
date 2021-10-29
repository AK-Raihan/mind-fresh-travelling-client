import React from 'react';
import img from '../../images/about.png'

const About = () => {
    return (
        <div>
            <div className="container">
                <div className="row py-5">
                    <h2 className="mb-5">Who We Are?</h2>
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img className="img-fluid" src={img} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <h4>We Are Travel Experts</h4>
                            <p >You can learn a lot about yourself through travelling. You can observe how you feel beeing far from your country. You will find out how you feel about your homeland. You will realise how you really feel about foreign people. You will find out how much you know/do not know about the world. You will be able to observe how you react in completely new situations. You will test your language, orientational and social skills. You will not be the same person after returning home.During travelling you will meet people that are very different from you. If you travel enough, you will learn to accept and appreciate these differences. Traveling makes you more open and accepting.</p>
                            <button className="btn btn-outline-info">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;