import styled from "styled-components/native";

export const EventList = styled.SafeAreaView`
  padding: 10px 15px 0px 15px;
`

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})`
  margin-top: 15px;
  margin-bottom: 20px;
`