import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  .pro-pic {
    // display: flex
    height: 10%;
    width: 30%;
    border-radius: 70%;
    position: absolute
    padding: 1.5rem;
   
  }
  .pro-img {
    position: static;
    width: 28%;
  }
`;
