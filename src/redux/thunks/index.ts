import VacancyAPI from 'api/vacancies';
import getSavedVacanciesThunkCb from 'redux/thunks/getSavedVacanciesThunk';
import getVacanciesThunkCb from 'redux/thunks/getVacanciesThunk';
import getVacancyByIdThunkCb from 'redux/thunks/getVacancyThunk';

const vacancyAPI = new VacancyAPI();

export const getVacancyByIdThunk = getVacancyByIdThunkCb(vacancyAPI);
export const getSavedVacanciesThunk = getSavedVacanciesThunkCb(vacancyAPI);
export const getVacanciesThunk = getVacanciesThunkCb(vacancyAPI);
