const MailIcon = ({ color, classes, handleClick }) => {
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
          d="M366 4464 c-255 -62 -415 -322 -351 -569 20 -75 57 -143 107 -195 45
-46 2175 -1471 2253 -1506 119 -54 260 -52 382 5 95 45 2182 1442 2235 1496
249 254 113 686 -243 770 -94 22 -4291 21 -4383 -1z"
        />
        <path
          d="M0 2236 c0 -810 3 -1181 11 -1218 37 -176 179 -320 360 -363 94 -22
4267 -22 4372 0 182 38 329 184 366 363 13 61 16 2386 3 2380 -4 -1 -487 -323
-1074 -715 -587 -392 -1099 -729 -1139 -748 -110 -56 -204 -77 -339 -77 -135
0 -229 21 -339 77 -40 19 -552 356 -1139 748 -587 392 -1070 714 -1074 715 -5
2 -8 -521 -8 -1162z"
        />
      </g>
    </svg>
  );
};

export default MailIcon;
