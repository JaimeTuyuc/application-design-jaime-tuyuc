import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const RenderQuotesConatiner = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 300% 300%;
  position: relative;
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

export const SubContainer = styled.div`
  width: 50%;
  height: 60%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  opacity: 1;
  background-image: url(${(props) => props.image});
  background-size: cover;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 3px rgba(99, 31, 102, 1);
  border: 0.8px solid rgba(99, 31, 102, 1);
  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  h3 {
    color: #f2f3f5;
    padding: 0.5rem;
    font-size: 26px;
  }

  p {
    color: #f2f3f5;
    text-align: center;
    font-size: 22px;
    font-style: italic;
    padding: 0.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
`;

export const ButtonChange = styled.button`
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
  padding: 1.3rem 0;
  justify-content: center;
  font-size: 21px;

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

export const FooterContainer = styled.div`
  background-color: #ff7300;
  opacity: 0.8;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    height: 9%;
  }
  @media (max-width: 500px) {
    height: 13%;
  }
`;

export const SubContentFooter = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  flex-direction: row;
  p {
    font-family: Roboto;
    color: rgba(99, 31, 102, 8);
    font-weight: 700;
    align-items: center;
    font-size: 20px;
    text-align: center;
    span {
      font-style: italic;
      color: #f2f3f5;
      font-weight: bolder;
      font-size: 20px;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;

    p {
      padding: 0.2rem 0;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
    background-color: red;
  }
`;
