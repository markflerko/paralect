import { NumberInput } from '@mantine/core';

export type NumberInputProps = {
  setValue: (value: number) => void;
  placeholder: string;
  value: number | "";
};

export const MonetaryInput = ({
  setValue,
  placeholder,
  value,
}: NumberInputProps) => {
  const handleChange = (value: number) => {
    setValue(value);
  };

  return (
    <NumberInput
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
    />
  );
};
