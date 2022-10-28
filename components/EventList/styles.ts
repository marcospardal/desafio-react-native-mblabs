import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { Themed } from "../../types/themed";

export const EventList = styled.SafeAreaView`
  padding: 10px 10px 0px 10px;
`

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})`
  margin-top: 15px;
  margin-bottom: 280px
`