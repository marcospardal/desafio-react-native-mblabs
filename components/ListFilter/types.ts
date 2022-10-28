type FilterTypes = 'All' | 'College' | 'Company';

export interface ListFilterProps {
  filterValue: FilterTypes;
  onChangeFilter: (value: FilterTypes) => void
}