import styled from 'styled-components/native'; 
 import { TextInputProps } from 'react-native';

export const Container = styled.View` 
  flex-direction: column;
  min-width: 95%; 
  padding-left: 10px;
  padding-right: 10px;
`;
 
export const ContentInput = styled.TextInput<TextInputProps>`
    padding: 20px; 
    border: 1px solid ${props => props.error ? '#FF377F' : '#989FDB' };
    border-radius: 8px;
`;

export const PlaceholderText = styled.Text`  
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 30px;   
    color: #383E71;
`;


export const ErrorText = styled.Text`  
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 30px;   
    color: #FF377F;
`;