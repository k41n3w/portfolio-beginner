import React from 'react';
import content from '../content';

export default function Navigation() {
  return (
    <div
      style={{
        background: '#374151',
      }}
    >
      <div className="flex items-center justify-between w-10/12 mx-auto py-3 text-white font-dosis">
        <h1 className="sm:text-sm md:text-3xl font-bold">
          {content.nav.logo}
          <span className="w-3 h-3 bg-red-500 inline-block rounded-full"></span>
        </h1>
        <div>
          {content.nav.links.map((link, index) => {
            return (
              <span key={index} className="sm:text-sm md:text-xl mr-4">
                <a href={link.to}>
                  {link.text}
                </a>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
