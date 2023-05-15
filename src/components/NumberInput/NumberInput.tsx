import { NumberInput } from '@mantine/core';

export type NumberInputProps = {
  setValue: (value: number) => void;
  placeholder: string;
};

export const MonetaryInput = ({ setValue, placeholder }: NumberInputProps) => {
  const handleChange = (value: number) => {
    setValue(value);
  };

  return <NumberInput onChange={handleChange} placeholder={placeholder} />;
};
