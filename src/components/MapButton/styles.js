import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: ${({ transparent }) => (transparent ? 'transparent' : '#fff')};
  border-radius: 22.5px;
  margin-right: ${({ noMargin }) => (noMargin ? '0px' : '10px')};
`;

export const Icon = styled.Image``;
