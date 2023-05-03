import { FC } from 'react';

export type VacancyProps = {
  id: string;
  profession: string;
  firm_name: string;
  town: string;
  industry: string;
  typeOfWork: string;
  payment_amount_from: number;
  payment_amount_to: number;
  currency: string;
};

export const Vacancy: FC<VacancyProps> = ({
  id,
  profession,
  firm_name,
  town,
  industry,
  typeOfWork,
  payment_amount_from,
  payment_amount_to,
  currency,
}) => {
  return (
    <li key={id}>
      <h3>{profession}</h3>
      <p>{firm_name}</p>
      <p>{town}</p>
      <p>{industry}</p>
      <p>{typeOfWork}</p>
      <p>
        {payment_amount_from} - {payment_amount_to} {currency}
      </p>
    </li>

    // <Paper shadow="xs" p="md">
    //   <Text>Paper is the most basic ui component</Text>
    //   <Text>
    //     Use it to create cards, dropdowns, modals and other components that
    //     require background with shadow
    //   </Text>
    // </Paper>
  );
};
