import React from 'react';
import { RectButton } from 'react-native-gesture-handler';

import * as S from './styles';

const Button = ({ children, ...props }) => {
  return (
    <S.Container {...props}>
      <S.ButtonText>{children}</S.ButtonText>
    </S.Container>
  );
};

export default Button;
