'use client'

import Image from 'next/image'
import React from 'react';

const { useState, useEffect } = React;

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => { 
    window.addEventListener("scroll", listenToScroll);
    return () => {window.removeEventListener("scroll", listenToScroll)}
  }, []);
  
  const listenToScroll = () => {
    let hiddenHeight = 30;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > hiddenHeight) {  
         isVisible && setIsVisible(false);
    } else {
         setIsVisible(true);
    }  
  };

  return (
    <main className="mx-20">
      <div className={"flex flex-col items-center sm:justify-start lg:justify-between header"}>
        <div className="flex flex-row-reverse w-full max-w-6xl items-center justify-between banner pb-24">
          <Image className="portrait" src="/portrait.jpg"  alt="me" width="325" height="325"/>
          <div>
            <h1 className='text-6xl md:text-7xl lg:text-8xl'>Hi, I'm <b>Willson</b>!</h1>
            <p className='text-2xl md:text-3xl lg:text-4xl'>I'm a software engineer at Datadog.</p>
            <div className="navbar">
              <p><a href="/resume.pdf" target="_blank">
                Resume
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a></p>
              <p><a href="https://www.linkedin.com/in/wangwillson1/" target="_blank">
                Linkedin
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a></p>
              <p><a href="http://github.com/wangwillson1" target="_blank">
                Github
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>  
              </a></p>
            </div>
          </div>
        </div>
        <a href="#about">
          <div className={"flex flex-col items-center animate-bounce ".concat(isVisible ? "fadeIn" : "fadeOut")}>
            <p className="text-sm mb-2">scroll down</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </a>
      </div>
      <div className="flex w-full justify-center content">
        <div className={"buffer ".concat(isVisible ? "shiftdown" : "shiftup")}>
          <div id="about">
            <h1 className="text-3xl">A little about me</h1>
            <p className="text-2xl">I studied computer science at the University of Waterloo (Canada!) and graduated in 2023.</p>
            <p className="text-2xl mt-2">I'm a huge foodie and I love exploring restaurants, but I also enjoy cooking, baking, and making lattes!</p>
            <p className="text-2xl mt-2">Other interests include photography, volleyball, skiing, and snowboarding.</p>
          </div>
          <div className="mt-14">
            <h1 className="text-3xl">What am I working on</h1>
            <p className="text-2xl">I currently work on access control at Datadog, working mainly in Python and React.</p>
            <p className="text-2xl mt-2">In the past, I worked on internal Terraform API monitors and the IP allowlist feature.</p>
            <p className="text-2xl mt-2">Before Datadog, I interned at companies like Meta and Wish.</p>
          </div>
          <div className="mt-14">
            <h1 className="text-3xl">How can I get in touch</h1>
            <p className="text-2xl">
              Feel free to reach out through <a href="mailto:wang.willson1@gmail.com">email</a> or <a href="https://www.linkedin.com/in/wangwillson1/" target="_blank">Linkedin</a> if you'd like to chat or meet up!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
