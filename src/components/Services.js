import React from 'react';

const Services = () => {
  return (
    <section className="section" id='services'>
    
    <div className="container mx-auto px-16">
      
    <div className='flex flex-col lg:flex-row justify-between'>
      <div className='flex flex-col'>
      <h2 className='h2 text-accent underline'>Education</h2>
      <ul className="flex flex-col space-y-2">
        <li className="flex items-start">
          <div className="w-2 h-2 bg-red-500 rounded-full mt-1"></div>
          <div className="ml-2 border-l border-red-500 pl-4">
          <div className="flex items-center mb-6">
        <div className="w-full">
          <h3 className="text-lg font-bold">The Assam Kaziranga University</h3>
          <p className="text font-semibold">Bachelor of Technology in Computer Science</p>
          <p className="text font-semibold">2019-23</p>
        </div>
      </div>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-2 h-2 bg-red-500 rounded-full mt-1"></div>
          <div className="ml-2 border-l border-red-500 pl-4">
          <div className="flex items-center mb-6">
        <div className="w-full">
          <h3 className="text-lg font-bold">Sai RNS Academy, Guwahati</h3>
          <p className="text font-semibold">Class 12 (CBSE)</p>
          <p className="text font-semibold">2018-19</p>
        </div>
      </div>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-2 h-2 bg-red-500 rounded-full mt-1"></div>
          <div className="ml-2 border-l border-red-500 pl-4">
          <div className="flex items-center mb-6">
        <div className="w-full">
          <h3 className="text-lg font-bold">South Point School, Guwahati</h3>
          <p className="text font-semibold">Class 10 (CBSE)</p>
          <p className="text font-semibold">2016-17</p>
        </div>
      </div>
          </div>
        </li>
      </ul>

     
      </div>
      <div className='flex flex-col'>
      <h2 className='h2 text-accent underline'>Experience</h2>
      <ul className="flex flex-col space-y-2">
        <li className="flex items-start">
          <div className="w-2 h-2 bg-red-500 rounded-full mt-1"></div>
          <div className="ml-2 border-l border-red-500 pl-4">
          <div className="flex items-center mb-6">
        <div className="w-full">
          <h3 className="text-lg font-bold">TechVariable</h3>
          <p className="text font-semibold">Junior Programmer Analyst Trainee</p>
          <p className="text font-semibold">January 2023 - June 2023</p>
        </div>
      </div>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-2 h-2 bg-red-500 rounded-full mt-1"></div>
          <div className="ml-2 border-l border-red-500 pl-4">
          <div className="flex items-center mb-6">
        <div className="w-full">
          <h3 className="text-lg font-bold">Tcs ION</h3>
          <p className="text font-semibold">Intern</p>
          <p className="text font-semibold">July 2022- September 2022</p>
        </div>
      </div>
          </div>
        </li>
        <li className="flex items-start">
          <div className="w-2 h-2 bg-red-500 rounded-full mt-1"></div>
          <div className="ml-2 border-l border-red-500 pl-4">
          <div className="flex items-center mb-6">
        <div className="w-full">
          <h3 className="text-lg font-bold">Friends For Inclusion</h3>
          <p className="text font-semibold">Software Developer</p>
          <p className="text font-semibold">June 2021- July 2022</p>
        </div>
      </div>
          </div>
        </li>
      </ul>

     
      </div>
      </div>
    </div>
  </section>);
};

export default Services;
