import React, { useEffect, useState, useRef, useCallback } from 'react';
import { TextInput, TextInputProps  } from 'react-native';

import { useField } from '@unform/core';

import { Container , ContentInput, PlaceholderText, ErrorText} from './styles';

interface Props {
  name: string;
  label?: string;
};
type InputProps = TextInputProps & Props;

interface PropsInput {
  value: string;
};
type InputRef = TextInput & PropsInput;


const Input: React.FC<InputProps> = ({ name, onChangeText, placeholder, ...rest } ) => {

    const inputRef = useRef<InputRef>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
      registerField({
        name: fieldName,
        path: 'value',
        ref: inputRef.current,
      })
    }, [fieldName, registerField]);


    const handleOnChange = useCallback(
      text => {
          if (inputRef.current) inputRef.current.value = text;
          if (onChangeText) onChangeText(text);
      },
      [onChangeText],
  );

    const handleInputBlur = useCallback(() => {
      setIsFocused(false);
      if (inputRef.current?.value !== '') {
        setIsFilled(true);
      } else {
        setIsFilled(false);
      }
    }, []);

    const handleInputFocus = useCallback(() => {
      setIsFocused(true);
    }, []);


    return (
        <Container>
            <PlaceholderText>{placeholder}</PlaceholderText>
            <ContentInput
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                ref={inputRef}
                defaultValue={defaultValue}
                onChangeText={handleOnChange} 
                error={error}
                {...rest}
            /> 
            {error && <ErrorText>{error}</ErrorText>}
        </Container>

    );
};

export default Input;
