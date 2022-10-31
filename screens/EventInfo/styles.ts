import { FontAwesome5 } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  align-items: flex-start;
  flex: 1;
`

export const Title = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: ${({ theme }: any) => theme.contrastText};
`

export const EventImage = styled.Image`
  height: 220px;
  width: 100%;
`

export const Content = styled.View`
  padding: 10px 10px;
`

export const Description = styled.Text`
  font-size: 18px;
  line-height: 20px;
  text-align: justify;
  margin: 15px 0px;
  color: ${({ theme }: any) => theme.text};
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Icon = styled(FontAwesome5).attrs({
  size: 18
})`
  color: ${({ theme }: any) => theme.contrastText};
  align-self: center;
`

export const BuyingOptions = styled.View`
  bottom: 40px;
  position: absolute;
  flex-direction: row;
  left: 0px;
  max-width: 75%;
  height: 50px;
  padding: 0px 10px;
`

export const AddCart = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: any) => theme.tint};
  border-radius: 4px;
  margin: 0 10px;
  width: 100%;
  height: 40px;
`

export const CartLabel = styled.Text`
  font-size: 18px;
  color: ${({ theme }: any) => theme.background};
  font-weight: bold;
`