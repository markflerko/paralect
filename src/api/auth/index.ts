import API from 'api';
import { IAuthAPI } from 'api/auth/types';

const headers = {
  'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
};

export default class AuthAPI extends API implements IAuthAPI {
  constructor() {
    super(headers);
  }

  public async refresh() {
    return this.instance
      .get(
        'oauth2/refresh_token/?refresh_token=v3.r.137440105.0796c6f3d8d49539a13a414375b9d86564187de4.29b4a37ec3d2d1ac9cf4667bb911f47c0d8567c0&client_id=2356&client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
      )
      .then((res) => res.data)
      .catch(() => ({ message: 'Error while refresh' }));
  }

  public async login() {
    return this.instance
      .post('oauth2/password', {
        login: 'sergei.stralenia@gmail.com',
        password: 'paralect123',
        client_id: '2356',
        client_secret:
          'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
        hr: '0',
      })
      .then((res) => res.data)
      .catch(() => ({ message: 'Error while login' }));
  }
}
