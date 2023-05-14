import axios, { AxiosInstance } from 'axios';

export default class API {
  protected instance: AxiosInstance;

  constructor(headers: Record<string, string>) {
    this.instance = axios.create({
      baseURL: 'https://startup-summer-2023-proxy.onrender.com/2.0/',
      headers,
    });
  }
}
