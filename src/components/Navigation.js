import React from 'react';
import content from '../content';
import { Link as ScrollLink } from 'react-scroll';

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
              <ScrollLink to={link.to} smooth={true}>
                <button className="py-3 sm:text-sm md:text-3xl items-center mr-4 font-dosis">
                  {link.text}
                </button>
              </ScrollLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
