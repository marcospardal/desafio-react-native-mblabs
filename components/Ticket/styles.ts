import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Ticket = styled.View`
  flex-direction: row;
  height: 90px;
  align-self: center;
  align-items: center;
  padding: 10px 15px;
  width: 90%;
  margin: 10px 0px;
  border-radius: 4px;
  background-color: ${({ theme }: any) => theme.searchBarBackground};
`

export const Icon = styled(FontAwesome).attrs({
  name: 'ticket',
  size: 45
})`
  color: ${({ theme }: any) => theme.tint};
  flex: 1;
`

export const Content = styled.View`
  flex: 3;
`

export const TicketEvent = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1
})`
  flex: 2
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }: any) => theme.text};
`


export const Value = styled(FontAwesome5).attrs({
  name: 'dollar-sign',
  size: 35
})`
  color: ${({ theme }: any) => theme.tint};
  flex: 1;
  margin: 0
`

export const TicketValue = styled(TicketEvent)`
  font-size: 45px;
  margin: 0
`

export const Row = styled.View`
  flex: 2;
  flex-direction: row;
  align-items: center;
`