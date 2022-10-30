import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  background-color: ${({ theme }: any) => theme.searchBarBackground};
  width: 150px;
  height: 40px;
  border-radius: 4px;
  align-items: center;
`

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  flex: 1;
  align-items: center;
`

export const Icon = styled(FontAwesome).attrs({
  size: 18
})`
  color: ${({ theme, disabled }: any) => !disabled ? theme.tint : theme.disabled};
`

export const Number = styled.Text`
  font-size: 18px;
  justify-content: center;
  text-align: center;
  flex: 1;
  color: ${({ theme }: any) => theme.contrastText};
  font-weight: bold;
`