import React from "react"
import { BackgroundWrapper } from "./SvgStyles";

function BackgroundSVG() {
    return (
        <BackgroundWrapper>
            <svg id="visual" viewBox="0 0 1330 600" className="backG" width="1330" height="600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
                <rect x="0" y="0" width="1330" height="600" fill="#DAF5FF"></rect>
                <defs><linearGradient id="grad1_0" x1="33.3%" y1="0%" x2="100%" y2="100%">
                    <stop offset="20%" stopColor="#daf5ff" stopOpacity="1"></stop>
                    <stop offset="80%" stopColor="#daf5ff" stopOpacity="1"></stop>
                </linearGradient>
                </defs>
                <defs><linearGradient id="grad2_0" x1="0%" y1="0%" x2="66.7%" y2="100%"><stop offset="20%" stopColor="#daf5ff" stopOpacity="1"></stop>
                    <stop offset="80%" stopColor="#daf5ff" stopOpacity="1"></stop></linearGradient>
                </defs>
                <g transform="translate(1330, 0)">
                    <path d="M0 297.5C-45.9 279.5 -91.7 261.6 -138 239C-184.3 216.5 -231 189.3 -257.6 148.7C-284.3 108.1 -290.9 54.1 -297.5 0L0 0Z" fill="#56C0C8"></path>
                </g>
                <g transform="translate(0, 600)">
                    <path d="M0 -297.5C59.7 -294.1 119.4 -290.8 148.7 -257.6C178 -224.4 176.9 -161.4 196.6 -113.5C216.3 -65.6 256.9 -32.8 297.5 0L0 0Z" fill="#56C0C8"></path>
                </g>
            </svg>
        </BackgroundWrapper>
    )
}

export default BackgroundSVG;