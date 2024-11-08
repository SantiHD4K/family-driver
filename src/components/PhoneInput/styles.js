import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 55px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 45px;
  padding: 0 24px;
  margin-bottom: 24px;
`;

export const Code = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.color.primary};
  margin-right: 19px;
`;

export const Input = styled.TextInput`
  font-size: 18px;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.color.gray};
`;
