import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`
export const Info = styled.Text`
  font-size: 18px;
  color: ${({ theme }: any) => theme.contrastText};
  margin-left: ${({ noMargin }: any) => noMargin ? 2 : 8}px;
`