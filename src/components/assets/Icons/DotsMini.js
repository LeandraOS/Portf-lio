import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
  align-items: center;
`;
export const DotsMini = () => {
  return (
    <Container>
      <svg
        width="81"
        height="10"
        viewBox="0 0 81 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="76" cy="5" r="5" fill="#01497C" />
        <circle cx="5" cy="5" r="5" fill="#01497C" fill-opacity="0.4" />
        <path
          d="M45 5C45 7.76142 42.7614 10 40 10C37.2386 10 35 7.76142 35 5C35 2.23858 37.2386 0 40 0C42.7614 0 45 2.23858 45 5Z"
          fill="#D2691E"
          fill-opacity="0.7"
        />
      </svg>
    </Container>
  );
};
