import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { Themed } from "../../types/themed";

export const Input = styled.TextInput`
  height: 30px;
  background-color: red;
  border-radius: 10px;
  width: 200px;
  background-color: ${({ theme }: Themed) => Colors[theme].searchBarBackground};
  padding: 4px 8px;
`

export const SearchIcon = styled(FontAwesome)`
  position: absolute;
  right: 10px;
`