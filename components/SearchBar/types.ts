import { Themed } from "../../types/themed";

export interface SearchBarProps extends Themed {
  onSearch?: (value: string) => void
}