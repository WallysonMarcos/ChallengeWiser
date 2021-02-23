import React, { useRef } from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux'

import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/mobile';
import * as Yup from 'yup';

import { Container, ContentForm, Forgot, BackgroundImg, TextFlex, ButtonSubmit } from './styles';

import { Input } from '../../components/form';
import logo from '../../assets/images/bgSignIn.png';


interface SignInFormData {
  email: string;
  password: string;
}

interface ValidationErrorData {
  [key: string]: any
}

interface ErrorData {
  path: React.ReactText;
  message: any;
}


const SignIn = () => {

  const formRef = useRef<FormHandles>(null);
  const dispach = useDispatch();

  const handleSubmit: SubmitHandler<SignInFormData> = async (data) => {
    try {

      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().email('Digite um e-mail válido.')
          .required('Digite um e-mail.'),
        password: Yup.string().required('Digite uma senha válida.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { email, password } = data;
      //dispach({type: LoginTypes.LOGIN_REQUEST, paylod: { email, password } })

    } catch (err) {

      var validationErrors: ValidationErrorData = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error: ErrorData) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current?.setErrors(validationErrors);
      }

    }
    return false;
  }

  return (
    <Container>
      <BackgroundImg source={logo} resizeMode={'stretch'} />
      <ContentForm>
        <TextFlex size={24} width={40} margin={24} color={'383E71'} weight={400}>
          Olá, seja bem-vindo!
        </TextFlex>
        <TextFlex size={12} width={100} margin={10} color={'989FDB'} weight={600}>
          Para acessar a plataforma, faça seu login.
        </TextFlex>
        <Form ref={formRef} onSubmit={handleSubmit} style={{ marginBottom: 50 }}>
          <Input placeholder="E-MAIL" name="email" keyboardType={'email-address'} />
          <Input placeholder="SENHA" name="password" keyboardType={'number-pad'} secureTextEntry />


        </Form>
        <ButtonSubmit TextFlex="Sign in" onPress={() => formRef?.current?.submitForm()} >
          <Text allowFontScaling={false}
            style={{ color: '#fff', fontWeight: '600' }}>
            ENTRAR
          </Text>
        </ButtonSubmit>
      </ContentForm>
      <Forgot >
        <TextFlex size={14} margin={10} color={'FFFFFF'} weight={400}>
          Esqueceu seu login ou senha? Clique aqui
          </TextFlex>
      </Forgot>

    </Container>
  );
};

export default SignIn;
