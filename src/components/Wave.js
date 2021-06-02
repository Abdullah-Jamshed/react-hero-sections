import React from "react";

const Wave = () => {
  return (
    <svg width='1594' height='120' viewBox='0 0 1594 120' fill='#000' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
      <mask id='hero_mask0' mask-type='alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='1594' height='120'>
        <rect width='1594' height='120' fill='#FFFFFF'></rect>
      </mask>
      <g mask='url(#hero_mask0)'>
        <g clip-path='url(#hero_clip0)'>
          <path
            d='M-4.50342 469.251C-4.50342 396.012 -4.50342 78.7019 -4.50342 78.7019C-4.50342 78.7019 493.989 -46.6204 853.919 36.2605C1213.85 119.141 1481.4 51.6505 1593.34 9.15527e-05V468.682L-4.50342 469.251Z'
            fill='url(#hero_paint0_linear)'></path>
        </g>
      </g>
      <defs>
        <linearGradient id='hero_paint0_linear' x1='463.214' y1='66.5361' x2='463.214' y2='266.802' gradientUnits='userSpaceOnUse'>
          <stop stop-color='white'></stop>
          <stop offset='1' stop-color='white'></stop>
        </linearGradient>
        <clipPath id='hero_clip0'>
          <rect width='1601' height='470' fill='white' transform='translate(-7)'></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default Wave;
