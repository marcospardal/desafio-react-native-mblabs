import { Themed } from "../../types/themed";

type FilterTypes = 'All' | 'College' | 'Company';

export interface ListFilterProps extends Themed {
  filterValue: FilterTypes;
  onChangeFilter: (value: FilterTypes) => void
}