/*
 * @Description:
 * @Author: FlyingRedPig
 * @Date: 2021-03-10 14:56:06
 * @LastEditors: FlyingRedPig
 * @LastEditTime: 2021-03-10 16:40:51
 */
import axios from 'axios';
import { toast } from 'react-toastify';
import logger from './logServices';

//handle unexpected error
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status <= 500;
  if (!expectedError) {
    logger.log(error);
    toast.error('An expected error occurred');
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
