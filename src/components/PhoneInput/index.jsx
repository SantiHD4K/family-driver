import React from 'react';
import { TextInput } from 'react-native';

import * as S from './styles';

const PhoneInput = (props) => {
  return (
    <S.Container>
      <S.Code>+994</S.Code>
      <S.Input keyboardType="numeric" {...props} />
    </S.Container>
  );
};

export default PhoneInput;
