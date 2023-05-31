import API from 'api';
import { errorCaseResponse } from 'api/types';
import { IVacanciesAPI, IVacanciesDto } from 'api/vacancies/types';
import { getAccessToken } from 'utils/getAccessToken';

export default class VacancyAPI extends API implements IVacanciesAPI {
  constructor() {
    super({
      'X-Api-App-Id': process.env.REACT_APP_X_API_APP_ID as string,
      Authorization: `Bearer ${getAccessToken()}` as string,
    });
  }

  private async getHeaders() {
    const accessToken = await getAccessToken();

    return {
      'X-Api-App-Id': process.env.REACT_APP_X_API_APP_ID as string,
      Authorization: `Bearer ${accessToken}` as string,
    };
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

    const headers = await this.getHeaders();

    return this.instance
      .get(`vacancies?count=4&${queryString}`, { headers })
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
    const headers = await this.getHeaders();

    return this.instance
      .get(`vacancies/${id}`, { headers })
      .then((res) => res.data)
      .catch(() => errorCaseResponse(id));
  }
}
