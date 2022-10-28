import styled from "styled-components/native";

export const CarouselContainer = styled.View`
  height: 250px;
  padding: 10px 10px;
  flex-direction: column;
`

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }: any) => theme.text};
  font-family: 'fira-sans';
  margin-bottom: 20px;
`