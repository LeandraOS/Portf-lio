import React from "react";
import { LinkAnimation } from "./LinkStyles";

export const Email = ({ color }) => {
  return (
    <LinkAnimation href="https://fonts.google.com/" target="_blank">
      <svg
        width="50"
        height="50"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 10H50C52.75 10 55 12.25 55 15V45C55 47.75 52.75 50 50 50H10C7.25 50 5 47.75 5 45V15C5 12.25 7.25 10 10 10Z"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M55 15L30 32.5L5 15"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </LinkAnimation>
  );
};
