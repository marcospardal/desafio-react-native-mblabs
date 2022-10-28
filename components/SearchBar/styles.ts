import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import styled from "styled-components/native";

export const Input = styled.TextInput`
  height: 30px;
  background-color: red;
  border-radius: 10px;
  width: 200px;
  background-color: ${({ theme }: any) => theme.searchBarBackground};
  padding: 4px 8px;
`

export const SearchIcon = styled(FontAwesome)`
  position: absolute;
  right: 10px;
`