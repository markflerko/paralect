import API from 'api';
import { IAuthAPI } from 'api/auth/types';

export default class AuthAPI extends API implements IAuthAPI {
  public async refresh() {
    return this.instance
      .get(
        `oauth2/refresh_token/?refresh_token=${process.env.REACT_APP_REFRESH_TOKEN}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`,
      )
      .then((res) => res.data)
      .catch(() => ({ message: 'Error while refresh' }));
  }

  public async login() {
    return this.instance
      .post('oauth2/password', {
        login: 'sergei.stralenia@gmail.com',
        password: 'paralect123',
        client_id: process.env.REACT_APP_CLIENT_ID,
        client_secret: process.env.REACT_APP_CLIENT_SECRET,
        hr: '0',
      })
      .then((res) => res.data)
      .catch(() => ({ message: 'Error while login' }));
  }
}
