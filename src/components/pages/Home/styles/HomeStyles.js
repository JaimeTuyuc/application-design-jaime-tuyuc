import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const BackgroundHomePage = styled.main`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 300% 300%;
  background-image: linear-gradient(
    -45deg,
    rgba(59, 173, 227, 1) 0%,
    rgba(87, 111, 230, 1) 25%,
    rgba(152, 68, 183, 1) 51%,
    rgba(255, 53, 127, 1) 100%
  );
  animation: AnimateBG 15s ease infinite;

  @keyframes AnimateBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const MainContainer = styled.div`
  /*background-color: rgba(256, 256, 256, 0.5);*/
  background-color: green;
  width: 40%;
  height: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 3px rgba(99, 31, 102, 1);
  border: 0.8px solid rgba(99, 31, 102, 1);
  padding: 1.2rem;

  h1 {
    font-size: 23px;
    padding: 1rem 0;
    text-transform: uppercase;
    color: #f2f3f5;
  }

  p {
    color: #f2f3f5;
    font-size: 19px;
    word-wrap: break-word;
    line-height: 25px;
    text-align: center;
  }

  @media (max-width: 600px) {
    width: 70%;

    h1 {
      font-size: 18px;
      text-align: center;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonQuote = styled.div`
  width: 100%;
  background-color: rgba(99, 31, 102, 8);
  color: #f2f3f5;
  text-align: center;
  display: flex;
  text-transform: uppercase;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;

  a {
    width: 100%;
    padding: 1.3rem 0;
    color: #f2f3f5;
    text-decoration: none;
  }

  &:before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
    color: #fff;
  }

  &:active {
    color: #ffffff;
  }

  &:active:after {
    background: rgba(99, 31, 102, 0.9);
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(99, 31, 102, 8);
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

export const ContainerLanguage = styled.div`
  background-color: orange;
  position: absolute;
  top: 3rem;
  right: 5rem;
  padding: 1rem 2rem;
  border-radius: 10px;
`;
