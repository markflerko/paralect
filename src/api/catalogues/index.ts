import API from 'api';
import { ICatalogueDto, ICataloguesAPI } from 'api/catalogues/types';

const headers = {
  'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
  'X-Api-App-Id':
    'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
};

export default class CataloguesAPI extends API implements ICataloguesAPI {
  constructor() {
    super(headers);
  }

  public async getCatalogues() {
    return this.instance
      .get('catalogues')
      .then((res) =>
        res.data.map(({ title, key }: ICatalogueDto) => ({
          title,
          key,
        }))
      )
      .catch(() => []);
  }
}
