import API from 'api';
import { errorCaseResponse } from 'api/types';
import { IVacanciesAPI, IVacanciesDto } from 'api/vacancies/types';

const headers = {
  'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
  'X-Api-App-Id':
    'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
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
  }: IVacanciesDto) {
    let queryString = `&page=${page}`;

    if (key) {
      queryString += `&catalogues=${key}`;
    }
    if (paymentFrom) {
      queryString += `&payment_from=${paymentFrom}`;
    }
    if (paymentFrom) {
      queryString += `&payment_to=${paymentTo}`;
    }

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
