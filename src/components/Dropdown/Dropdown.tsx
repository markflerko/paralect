import { Select } from '@mantine/core';
import { DropdownIcon } from './DropdownIcon';

export type SearchBarProps = {
  data: string[];
  setIndustry: (value: string) => void;
  value: string;
};

export const Dropdown = ({ data, setIndustry, value }: SearchBarProps) => {
  const handleChange = (value: string) => {
    setIndustry(value);
  };

  return (
    <Select
      placeholder="Выберете отрасль"
      rightSection={<DropdownIcon />}
      rightSectionWidth={30}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      data={data}
      onChange={handleChange}
      value={value}
    />
  );
};
