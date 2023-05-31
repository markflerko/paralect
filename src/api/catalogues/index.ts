import API from 'api';
import { ICatalogueDto, ICataloguesAPI } from 'api/catalogues/types';
import { getAccessToken } from 'utils/getAccessToken';

export default class CataloguesAPI extends API implements ICataloguesAPI {
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

  public async getCatalogues() {
    const headers = await this.getHeaders();

    return this.instance
      .get('catalogues', { headers })
      .then((res) =>
        res.data.map(({ title, key, title_trimmed }: ICatalogueDto) => ({
          title: title_trimmed,
          key,
        })),
      )
      .catch(() => []);
  }
}
