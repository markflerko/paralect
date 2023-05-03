import { Select } from '@mantine/core';
import { FC } from 'react';
import { DropdownIcon } from './DropdownIcon';

export type SearchBarProps = {
  data: string[]
};

export const Dropdown: FC<SearchBarProps> = ({data}) => {
  return (
    <Select
      placeholder="Выберете отрасль"
      rightSection={<DropdownIcon />}
      rightSectionWidth={30}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      data={data}
    />
  );
};
