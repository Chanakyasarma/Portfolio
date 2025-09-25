import React from 'react';
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'

const Work = () => {
  const handleButtonClick1 = () => {
    window.open('https://github.com/Chanakyasarma?tab=repositories', '_blank');
  };
  return (
  <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 items-center'>
          <div >
            <h2 className='h2 leading-tight text-accent underline'>
              Projects
            </h2>
            
          </div>
          <div className='max-h-xl max-w-7xl flex flex-col item-center justify-center'>
          <div className='flex flex-col lg:flex-row lg:justify-between my-6 lg:my-10'>
          <h2 className="text-accent text-xl font-bold mb-2 lg:hidden">Portfolio</h2>
          <div className='group relative h-full lg:h-80 w-full lg:w-1/2 overflow-hidden border-2 border-black/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40'>
              <a className='text-3xl text-white underline decoration-rose-500' href='#'>Demo</a></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-40'>
              <a className='text-gradient underline decoration-white' href='https://github.com/Chanakyasarma/Portfolio'>Code</a>
            </div>
          </div>
          <div className='flex flex-col text-right sm:hidden'>
            <h2 className='h2 text-accent'>Portfolio</h2>
            <p className='max-w-md font-medium'>
I have created a portfolio website using HTML, Tailwind CSS, and ReactJS. This website serves as a comprehensive representation of my professional journey, highlighting my educational background, acquired skills, and the projects I have completed. With a clean and modern design, the website offers a visually appealing and user-friendly experience, allowing visitors to gain insights into my abilities and explore my portfolio effortlessly.</p>
          </div>
          </div>
          <div className='flex flex-col lg:flex-row lg:justify-between my-6 lg:my-10 '>
          <div className='lg:flex flex-col text-left sm:hidden'>
            <h2 className='h2 text-accent'>YouTube Clone</h2>
            <p className='max-w-md font-medium'>The project I developed is a YouTube clone created using React, HTML, and CSS. I leveraged various tools and concepts such as React Router to handle navigation within the application. 
            Additionally, I integrated the YouTube API, which allowed me to fetch real-time data from YouTube, enabling users to access the latest videos, view likes and other relevant information.
            </p></div> 
          <h2 className="text-accent text-xl font-bold mb-2 lg:hidden">YouTube Clone</h2>
          <div className='group relative h-full lg:h-80 w-full lg:w-1/2 overflow-hidden border-2 border-black/50 rounded-xl'>
            
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40'>
              <a className='text-3xl text-white underline decoration-rose-500' href='https://utube-clone-lemon.vercel.app/'>Demo</a></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-40'>
              <a className='text-gradient underline decoration-white' href='https://github.com/Chanakyasarma/youtube-clone'>Code</a>
            </div>
        </div>
        </div>
        <div className='flex flex-col lg:flex-row justify-between my-6 lg:my-10'>
    <h2 className="text-accent text-xl font-bold mb-2 lg:hidden">YouTube Clone</h2>
        <div className='group relative h-full lg:h-80 w-full lg:w-1/2 overflow-hidden border-2 border-black/50 rounded-xl'>
            <h2 className="text-accent text-xl font-bold mb-2 lg:hidden">SamVaad:Chat-app</h2>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=''/>
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-40'>
              <a className='text-3xl text-white underline decoration-rose-500' href='https://samvaad-chat-app.netlify.app/'>Demo</a></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-40'>
              <a className='text-gradient underline decoration-white' href='https://github.com/Chanakyasarma/Samvaad-The_chat_app'>Code</a>
            </div>
        </div>
        <div className='flex flex-col text-right sm:hidden'>
            <h2 className='h2 text-accent'>SamVaad:Chat-app</h2>
            <p className='max-w-md font-medium'>Samvaad is a realtime chat app built with Vite, React, TypeScript, Firebase, and other technologies. This chat app is purposefully made for the web, like a web chat app, but it also works on mobile devices.Some of the Unique feature of this appication are realtime chat, translate chat to multiple language, react to message, send files and images </p>
        </div>
        </div>
        </div>
        <button className='btn btn-sm border-2 border-black w-sm' onClick={handleButtonClick1}>View all Project</button>
        
        
        </div>
      </div>
    </div>
  </section>);
};

export default Work;
