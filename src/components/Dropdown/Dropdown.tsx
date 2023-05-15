import { Select } from '@mantine/core';
import { FC } from 'react';
import { DropdownIcon } from './DropdownIcon';

export type SearchBarProps = {
  data: string[];
  setIndustry: (value: string) => void;
};

export const Dropdown: FC<SearchBarProps> = ({ data, setIndustry }) => {
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
    />
  );
};
