import styled from "styled-components/native";
import { FontAwesome5 } from '@expo/vector-icons';

export const Card = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
  delayLongPress: 70,
})`
  border-radius: 4px;
  background-color: ${({ theme }: any) => theme.searchBarBackground};
  height: 130px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 15px 8px;
  flex-direction: row;
`

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const CardTitle = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1
})`
  flex: 2
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }: any) => theme.text};
`

export const Icon = styled(FontAwesome5).attrs({
  size: 15
})`
  color: ${(props) => props.theme.text};
`

export const EventTicketPrice = styled(CardTitle)`
  font-size: 15px;
  margin-top: 10px;
`

export const EventInfo = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1
})`
  font-size: 12px;
  line-height: 15px;
  flex: 1;
  color: ${({ theme }: any) => theme['contrastText']};
`

export const EventOrganizer = styled(EventInfo)`
  font-size: 10px;
  color: ${({ theme }: any) => theme.text};
`

export const CardInfo = styled.View`
  flex: 3;
  flex-direction: column;
  padding: 0px 6px;
`

export const EventImage = styled.Image`
  flex: 2;
  border-radius: 4px;
`