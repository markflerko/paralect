import { NumberInput } from '@mantine/core';
import { FC } from 'react';

export type NumberInputProps = {
  setValue: (value: number) => void;
  placeholder: string;
};

export const MonetaryInput: FC<NumberInputProps> = (props) => {
  const { setValue } = props;

  const handleChange = (value: number) => {
    setValue(value);
  };

  return <NumberInput onChange={handleChange} />;
};
