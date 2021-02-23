import { types } from '@babel/core'; 
import styled from 'styled-components/native'; 
 

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  align-items: center;
  background: #130525;

`;


export const BackgroundImg = styled.Image`
  position: absolute; 
  left: 0px;
  top: 0px;
  width: 100%;
  height: 50%;
`;

export const ContentForm = styled.View`
  width: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 10px;
  border-radius: 5px;
  padding: 10px;  
  background: #FAF5FF;
  border-radius: 8px;

`;


export const Forgot = styled.View` 
  flex-direction: column;
  margin: 10px; 
  border-radius: 5px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;
  
`;

interface TextProps {
  size: number;
}
export const TextFlex = styled.Text<TextProps>`
  /* font-family: 'Montserrat'; */
  font-style: normal;
  font-weight: ${props => props.weight};
  font-size: ${props => props.size}px; 
  line-height: 32px;
  color: #${props => props.color};
  margin-top: ${props => props.margin}px; 
  width:  ${props => props.width}%; 
  text-align: center;
`;


 

export const ButtonSubmit = styled.TouchableHighlight`
 
  position: absolute;
  bottom: 0; 
  width: 168px;
  height: 48px; 
  margin-bottom: -24px;
  background:  #9D25B0 ; 
  border-radius: 8px;  
  align-self: center;
  align-items: center; 
  justify-content: center;
`;
