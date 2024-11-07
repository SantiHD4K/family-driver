import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: ${55 / 2}px;
`;

export const Input = styled.TextInput`
  text-align: center;
  width: 55px;
  height: 55px;
  font-size: 18px;
  color: ${({ theme }) => theme.color.primary};
`;
