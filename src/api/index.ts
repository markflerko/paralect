import axios, { AxiosInstance } from 'axios';

export default class API {
  protected instance: AxiosInstance;

  constructor(headers?: Record<string, string>) {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        'x-secret-key': process.env.REACT_APP_X_SECRET_KEY as string,
        ...headers,
      },
    });
  }
}
