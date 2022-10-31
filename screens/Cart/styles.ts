import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  padding: 10px 15px 0px 15px;
  flex: 1;
`

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})`
  margin-top: 15px;
  flex: 1;
`

export const Finish = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  bottom: 40px;
  position: absolute;
  margin: 10px;
  width: 90%;
  align-self: center;
  justify-content: center;
  height: 50px;
  background-color: ${({ theme }: any) => theme.success};
  border-radius: 4px;
`

export const FinishLabel = styled.Text`
  font-size: 30px;
  align-self: center;
  font-weight: bold;
  color: ${({ theme }: any) => theme.white};
`