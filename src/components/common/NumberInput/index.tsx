import { NumberInput } from '@mantine/core';

export type NumberInputProps = {
  setValue: (value: number) => void;
  placeholder: string;
  value: number | '';
  dataElem: string;
};

export function MonetaryInput({
  setValue,
  placeholder,
  value,
  dataElem,
}: NumberInputProps) {
  const handleChange = (value: number) => {
    setValue(value);
  };

  return (
    <NumberInput
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
      data-elem={dataElem}
    />
  );
}
