import http from '/@/utils/http/index';

export const product = ({ api, method, data }) => {
  return http.request({
    url: api,
    method,
    data,
  });
};
