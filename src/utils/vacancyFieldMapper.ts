import { IVacancy } from 'interfaces/Vacancy.interface';
import { getVacancyByIdThunkResponseType } from 'redux/thunks/getVacancyThunk';

export const vacancyFieldMapper = (
  vacancy: getVacancyByIdThunkResponseType,
): IVacancy => {
  return {
    currency: vacancy?.currency,
    id: vacancy?.id,
    paymentAmountFrom: vacancy?.payment_from,
    paymentAmountTo: vacancy?.payment_to,
    profession: vacancy?.profession,
    town: vacancy?.town?.title,
    typeOfWork: vacancy?.type_of_work?.title,
    vacancyRichText: vacancy?.vacancyRichText,
  };
};
