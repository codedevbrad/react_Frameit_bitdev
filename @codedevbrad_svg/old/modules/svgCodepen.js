import React from 'react';

// https://codepen.io/Oziris/pen/EZdvWq

const SliderIcon = ( ) => {
    return (
        <svg class="sliders" viewBox="-1 0 34 36">
            <g stroke-linecap="round" stroke-linejoin="round" fill="transparent" stroke-width="1">
              <line class="svg-icon" x1="12.6" y1="4.5" x2="31" y2="4.5"/>
              <line class="svg-icon" x1="0" y1="4.5" x2="4.5" y2="4.5"/>
              <circle class="svg-icon" cx="8.5" cy="4.5" r="4"/>
            </g>
            <g stroke-linecap="round" stroke-linejoin="round" fill="transparent" stroke-width="1">
              <line class="svg-icon" x1="18.4" y1="18.3" x2="0" y2="18.1"/>
              <line class="svg-icon" x1="31" y1="18.3" x2="26.4" y2="18.3"/>
              <circle class="svg-icon" cx="22.4" cy="18.3" r="4"/>
            </g>
            <g stroke-linecap="round" stroke-linejoin="round" fill="transparent" stroke-width="1">
              <line class="svg-icon" x1="12.6" y1="31.2" x2="31" y2="31.2"/>
              <line class="svg-icon" x1="0" y1="31.2" x2="4.5" y2="31.2"/>
              <circle class="svg-icon" cx="8.5" cy="31.3" r="4"/>
            </g>
        </svg>
    )
}

export {
    SliderIcon
}
