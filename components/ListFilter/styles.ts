import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { Themed } from "../../types/themed";

export const FilterContainer = styled.View`
  width: 230px;
  height: 40px;
  background-color: ${({ theme }: Themed) => Colors[theme].searchBarBackground};
  border-radius: 20px;
  flex-direction: row;
`

interface FilterOption extends Themed {
  selected: boolean;
}

export const FilterOption = styled.TouchableOpacity<FilterOption>`
  background-color: ${({ selected, theme }: FilterOption) => selected ? Colors[theme].tint : 'transparent'}
  width: ${({ selected }: FilterOption) => selected ? 90 : 70}px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0px 5px;
`

export const FilterName = styled.Text`
  color: ${({ selected, theme }: FilterOption) => selected ? Colors[theme].background : '#000'};
  font-size: ${({ selected }: FilterOption) => selected ? 15 : 10}px;
  font-weight: ${({ selected }: FilterOption) => selected ? 'bold' : 'regular'};
`