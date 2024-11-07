import React, { forwardRef } from 'react';
import { TextInput } from 'react-native';

import * as S from './styles';

const CodeInput = (props, ref) => {
  return (
    <S.Container>
      <S.Input ref={ref} keyboardType="numeric" maxLength={1} {...props} />
    </S.Container>
  );
};

export default forwardRef(CodeInput);
