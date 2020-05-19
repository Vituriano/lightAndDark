import styled from 'styled-components';

export const Wrapper = styled.section`
  background: var(--background);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.4s linear;
`;


export const Button = styled.button`
  background-color: transparent;
  width: 120px;
  height: 60px;
  border: 2px solid var(--border);
  border-radius: 40px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: color border 0.4s linear;
  cursor: pointer;
  outline: none;
`;

export const On = styled.p`
  padding-right: 40px;
  font-family: arial;
  display: inline-block;
  font-weight: bolder;
  color: var(--border);
  transition: color 0.4s linear;
`;

export const Off = styled.p`
  font-family: arial;
  display: inline-block;
  font-weight: bolder;
  transition: color 0.5s linear;
  color: var(--border);
`;

export const Toggle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--border);
  animation: ${(props) => (props.status)} .4s both;
  transition: background 0.4s linear;

  @keyframes On {
    0% {left: 60%;}
    100% {left: 6%;}
  }
  @keyframes Off {
    0% {left: 6%;}
    100% {left: 60%;}
  }
`;
