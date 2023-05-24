import API from 'api';
import { errorCaseResponse } from 'api/types';
import { IVacanciesAPI, IVacanciesDto } from 'api/vacancies/types';

const headers = {
  'X-Api-App-Id': process.env.REACT_APP_X_API_APP_ID as string,
};

export default class VacancyAPI extends API implements IVacanciesAPI {
  constructor() {
    super(headers);
  }

  public async getVacancies({
    page = 0,
    key = null,
    paymentFrom = null,
    paymentTo = null,
    keyword,
  }: IVacanciesDto) {
    let queryString = `&page=${page}`;

    if (key) {
      queryString += `&catalogues=${key}`;
    }
    if (paymentFrom) {
      queryString += `&payment_from=${paymentFrom}`;
    }
    if (paymentTo) {
      queryString += `&payment_to=${paymentTo}`;
    }
    if (keyword) {
      queryString += `&keyword=${keyword}`;
    }

    console.log(queryString);

    return this.instance
      .get(`vacancies?count=4&${queryString}`)
      .then((res) => res.data.objects)
      .catch(() => []);
  }

  public async getSavedVacancies(ids: number[]) {
    try {
      const promises = ids.map((id) => this.getVacancyById(`${id}`));
      return await Promise.all(promises);
    } catch (error) {
      return [];
    }
  }

  public async getVacancyById(id: string) {
    return this.instance
      .get(`vacancies/${id}`)
      .then((res) => res.data)
      .catch(() => errorCaseResponse(id));
  }
}
