import { Select } from '@mantine/core';
import VerticalArrow from 'assets/images/VerticalArrow.svg';

export type SearchBarProps = {
  data: string[];
  setIndustry: (value: string) => void;
};

export const Dropdown = ({ data, setIndustry }: SearchBarProps) => {
  const handleChange = (value: string) => {
    setIndustry(value);
  };

  return (
    <Select
      placeholder="Выберете отрасль"
      rightSection={<img src={VerticalArrow} alt="Search" />}
      rightSectionWidth={30}
      styles={{ rightSection: { pointerEvents: 'none' } }}
      data={data}
      onChange={handleChange}
    />
  );
};
