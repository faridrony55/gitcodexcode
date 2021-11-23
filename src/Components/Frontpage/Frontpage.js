import React from 'react';
import Banner from '../Banner/Banner';
import Portfolio from '../Portfolio/Portfolio';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './Frontpage.css';
 
import youtube from '../../assets/images/youtube.png';
import upwork from '../../assets/images/upwork.png';
import fiverr from '../../assets/images/fiverr.png';

const Frontpage = () => {
 
    
    return (
        <>
        <section id="frontpage">
            <Banner></Banner> 

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-8">
                        <h1>Read this Before <a target="_blank" href="https://www.youtube.com/c/CodexCode?sub_confirmation=1">Subscribe Me</a></h1>
                    </div>
                    <div className="col-sm-8  ">
                       

                        <p>
                        বর্তমানে ফ্রিল্যান্সিং মার্কেটপ্লেসগুলোতে শপিফাই এর এখন অনেক চাহিদা। এই প্ল্যাটফর্মটি মূলত ড্রপশিপিং ছাড়াও যেকোনো ধরণের ছোট বড় অনলাইন ব্যবসা করার জন্য ব্যবহৃত হয়ে থাকে। যারাই ড্রপশিপিং ব্যবসার সাথে জড়িত আছেন বা জড়িত হওয়ার কথা ভাবছেন, অধিকাংশেরই পছন্দের প্ল্যাটফর্ম শপিফাই।</p>
                        <p>ফ্রিল্যান্সিং সেক্টরে শপিফাইয়ের উপর কাজের অভাব নাই।  উন্নত বিশ্বে বেশিরভাগ ইকমার্স ওয়েবসাইটি শপিফাই দিয়ে করা।  তাই স্টোরগুলো মেনেজমেন্টের জন্য দক্ষ মানুষ ও দরকার। </p>
                        <p>প্রোডাক্ট লিস্টিং , ইনভেন্টরি মেনেজমেন্ট , ল্যান্ডিং পেজ ডিজাইন , প্রোডাক্ট পেজ ডিজাইন , অর্ডার মেনেজমেন্ট , ওয়েবসাইট কাস্টমাইজেশন , ছোট ছোট বাগ ফিক্সিং ,  কাস্টম কোডিং , টেমপ্লেট ডিজাইন এই ধরণের কাজের অভাব নেই,  তা মার্কেটপ্লেস ঘটলেই বুঝতে পারবেন। </p>

                        <a href="/course" className="btn-custom">কোর্স কারিকুলাম</a>
                           
                    </div>
                </div>
            </div>
        </section>

        <div className="container">
            <div className="row">
                <div className="col-md">
                    <div className="textAnimation">
                        <h2>Freelancer </h2>
                        <img src={fiverr} alt="fiverr" className="img-fluid" />
                        <img src={upwork} alt="upwork" className="img-fluid" />
                    </div> 
                </div>
                <div className="col-md">
                    <div className="textAnimation">
                        <h2> Youtuber</h2>
                        <img src={youtube} alt="youtube" className="img-fluid" /> 
                    </div> 
                </div>
                <div className="col-md">
                    <div className="textAnimation">
                        <h2>Mentor  </h2>
                    </div> 
                </div>
            </div>
            </div>
            <Skills></Skills>

            <Portfolio></Portfolio>


        </>
    );
};

export default Frontpage;