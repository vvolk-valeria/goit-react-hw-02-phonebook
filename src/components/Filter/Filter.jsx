import { Label, Input, FilterContainer } from './Filter.styled';

export const Filter = ({ onChange }) => (
  <FilterContainer>
    <Label htmlFor="filter">Find contacts by name</Label>
    <Input type="text" name="filter" onChange={onChange} />
  </FilterContainer>
);
