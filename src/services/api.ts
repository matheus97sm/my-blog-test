import axios from 'axios';

export const tokenApi = axios.create({
  baseURL: 'http://my-blog-api.local/'
});

export const api = axios.create({
  baseURL: 'http://my-blog-api.local/wp-json/wp/v2/'
});
