import { Label, Input, FilterContainer } from './Filter.styled';

export const Filter = ({ onChange, value }) => (
  <FilterContainer>
    <Label htmlFor="filter">Find contacts by name</Label>
    <Input type="text" name="filter" onChange={onChange} value={value} />
  </FilterContainer>
);
