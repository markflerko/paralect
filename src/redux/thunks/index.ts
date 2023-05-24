import AuthAPI from 'api/auth';
import CataloguesAPI from 'api/catalogues';
import VacancyAPI from 'api/vacancies';
import getAuthThunkCb from 'redux/thunks/getAuthThunk';
import getCataloguesThunkCb from 'redux/thunks/getCataloguesThunk';
import getSavedVacanciesThunkCb from 'redux/thunks/getSavedVacanciesThunk';
import getVacanciesThunkCb from 'redux/thunks/getVacanciesThunk';
import getVacancyByIdThunkCb from 'redux/thunks/getVacancyThunk';

const authAPI = new AuthAPI();

export const getAuthThunk = getAuthThunkCb(authAPI);

const vacancyAPI = new VacancyAPI();

export const getVacancyByIdThunk = getVacancyByIdThunkCb(vacancyAPI);
export const getSavedVacanciesThunk = getSavedVacanciesThunkCb(vacancyAPI);
export const getVacanciesThunk = getVacanciesThunkCb(vacancyAPI);

const cataloguesAPI = new CataloguesAPI();

export const getCataloguesThunk = getCataloguesThunkCb(cataloguesAPI);
