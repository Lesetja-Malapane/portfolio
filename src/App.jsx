import React from 'react';

// Importing SVGs from your assets folder
// Note: Vite allows importing SVGs directly as URL strings usually, 
// or as components if using a plugin. Here we treat them as image sources.
import githubIcon from './assets/github-brands-solid-full.svg';
import instagramIcon from './assets/instagram-brands-solid-full.svg';
import linkedinIcon from './assets/linkedin-brands-solid-full.svg';
import tiktokIcon from './assets/tiktok-brands-solid-full.svg';
import xTwitterIcon from './assets/x-twitter-brands-solid-full.svg';
// import reactIcon from './assets/react.svg'; 

function App() {
  const socialLinks = [
    { icon: githubIcon, alt: "GitHub", link: "https://github.com/Lesetja-Malapane" },
    { icon: linkedinIcon, alt: "LinkedIn", link: "https://linkedin.com/in/lesetja-malapane-644885326" },
    { icon: xTwitterIcon, alt: "X / Twitter", link: "https://x.com/lesetjaa_" },
    { icon: instagramIcon, alt: "Instagram", link: "https://instagram.com/lesetjaa_" },
    { icon: tiktokIcon, alt: "TikTok", link: "https://tiktok.com/@lesetjaa_" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 relative font-sans">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-6xl gap-12 md:gap-24">
        
        {/* Left Section (Text) */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tight">
            Coming Soon
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            Working on a new portfolio, Stay Tuned!
          </p>

          <div className="flex justify-center md:justify-start gap-4 pt-2">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.alt}
                className="hover:scale-110 transition-transform duration-200"
              >
                <img 
                  src={social.icon} 
                  alt={social.alt} 
                  className="w-8 h-8 opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-pointer" 
                />
              </a>
            ))}
          </div>
        </div>

        <div className="shrink-0">
          <div className="w-64 h-64 md:w-96 md:h-96 bg-gray-300 rounded-full shadow-inner animate-pulse">
            {/* TODO: When you are ready to add your real image:
              1. Remove the 'bg-gray-300' and 'animate-pulse' classes above.
              2. Uncomment the img tag below:
            */}
            {/* <img 
              src="/path-to-your-image.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover rounded-full" 
            /> 
            */}
          </div>
        </div>

      </div>
      <div className="mt-16 md:absolute md:bottom-8 text-gray-400 text-sm font-light">
        2026 lesetja.dev
      </div>

    </div>
  );
}

export default App;