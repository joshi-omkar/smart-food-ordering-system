import * as React from "react"
const VegIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <rect
        width={7.2}
        height={7.2}
        x={7.15}
        y={7.15}
        stroke="#3F0"
        strokeWidth={0.3}
        rx={1.85}
      />
    </g>
    <g filter="url(#b)">
      <circle cx={10.75} cy={10.75} r={1.75} fill="#3F0" />
    </g>
    <defs>
      <filter
        id="a"
        width={7.5}
        height={7.5}
        x={7}
        y={7}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={11} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.2 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_103_264" />
      </filter>
      <filter
        id="b"
        width={21.5}
        height={21.5}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={4.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.2 0 0 0 0 1 0 0 0 0 0 0 0 0 0.52 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_103_264" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_103_264"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default VegIcon
