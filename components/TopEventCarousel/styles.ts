import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { Themed } from "../../types/themed";

export const CarouselContainer = styled.View`
  height: 300px;
  padding: 10px 10px;
  flex-direction: column;
`

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }: Themed) => Colors[theme].text};
  font-family: 'fira-sans';
  margin-bottom: 20px;
`