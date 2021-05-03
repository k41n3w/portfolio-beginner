import React from 'react';
import content from '../content';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Experience() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-black font-dosis"
      id="stack"
    >
      <h1 className="text-5xl font-bold text-white mt-20">Companies I've worked in</h1>
      <div className="flex flex-col justify-center mt-10">
        {content.companies.map((company) => {
          return (
            <>
            <div data-aos='zoom-in-right'>
              <div className="flex flex-row justify-center mt-10">
                <span
                  className='w-40 h-40 bg-white shadow-2xl mb-6 mr-10 mb-20 flex items-center p-5'
                >
                  <img src={company.img} alt={company.alt} />
                </span>
                <p className="w-11/12 md:max-w-xl text-xl text-center text-white">
                  {company.text}
                </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <span className='mb-10'></span>
    </div>
  );
}
