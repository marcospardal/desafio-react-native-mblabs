import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";

export const CartIcon = styled(FontAwesome).attrs({
  name: "shopping-cart",
  size: 25
})`
  color: ${({ theme }: any) => theme.text};
  margin-right: 25px;
`

export const ContainerNumber = styled.View`
  height: 15px;
  width: 15px;
  background-color: ${({ theme }: any) => theme.tint};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -5px;
  right: 15px;
  z-index: 10;
`

export const Number = styled.Text`
  color: ${({ theme }: any) => theme.white};
  font-weight: bold;
  font-size: 10px;
  font-family: 'fira-sans';
`