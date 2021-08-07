import http from '/@/utils/http/index';

export const sys = ({ api, method, data }) => {
  return http.request({
    url: api,
    method,
    data,
  });
};
