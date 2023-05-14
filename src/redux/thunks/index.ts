import CataloguesAPI from 'api/catalogues';
import VacancyAPI from 'api/vacancies';
import getCataloguesThunkCb from 'redux/thunks/getCataloguesThunk';
import getSavedVacanciesThunkCb from 'redux/thunks/getSavedVacanciesThunk';
import getVacanciesThunkCb from 'redux/thunks/getVacanciesThunk';
import getVacancyByIdThunkCb from 'redux/thunks/getVacancyThunk';

const vacancyAPI = new VacancyAPI();

export const getVacancyByIdThunk = getVacancyByIdThunkCb(vacancyAPI);
export const getSavedVacanciesThunk = getSavedVacanciesThunkCb(vacancyAPI);
export const getVacanciesThunk = getVacanciesThunkCb(vacancyAPI);

const cataloguesAPI = new CataloguesAPI();

export const getCataloguesThunk = getCataloguesThunkCb(cataloguesAPI);
