import React from 'react';

const PhoneCallIcon = ({ color, classes, handleClick }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="512.000000pt"
      height="512.000000pt"
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
      className={`w-5 h-5 ${classes}`}
      onClick={handleClick}
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={color || '#000000'}
        stroke="none"
      >
        <path
          d="M3813 4946 c-66 -21 -127 -62 -173 -113 -54 -61 -302 -436 -410 -618
   -101 -169 -209 -389 -240 -484 -17 -53 -21 -87 -18 -133 7 -110 49 -169 228
   -321 58 -50 123 -106 144 -125 l39 -35 -24 -71 c-36 -107 -148 -328 -227 -446
   -212 -319 -500 -573 -843 -746 -97 -48 -259 -114 -281 -114 -7 0 -67 64 -133
   141 -188 221 -253 269 -368 269 -155 0 -501 -176 -984 -502 -238 -160 -283
   -199 -325 -285 -62 -126 -42 -207 92 -374 211 -263 769 -711 1005 -808 58 -23
   63 -24 155 -12 557 68 1233 407 1860 930 654 547 1206 1275 1468 1936 92 232
   153 455 174 640 l12 101 -37 74 c-129 268 -544 778 -796 980 -144 116 -227
   146 -318 116z"
        />
      </g>
    </svg>
  );
};

export default PhoneCallIcon;