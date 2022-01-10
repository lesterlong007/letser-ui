/**
 * @Author lester
 * @Date 2020-07-17
 */

import Axios, { AxiosInstance, Method, AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import { Toast } from 'lester-tools';

export type HttpMethod = (...args: any) => Promise<any>;

const instance: AxiosInstance = Axios.create({
  timeout: 10000
});

/**
 * 拦截器
 */
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

/**
 * 处理response数据
 * @param res
 * @param resolve
 */
const handleRes = (res: AxiosResponse, resolve: Function) => {
  if (res.status === 200) {
    if (res.data.ret === 0) {
      resolve(res.data.retdata || typeof res.data.retdata === 'boolean' ? res.data.retdata : {});
    } else {
      const { retmsg } = res.data;
      Toast.fail(retmsg);
      resolve(null);
    }
  } else {
    const { statusText } = res;
    Toast.fail(statusText);
    resolve(null);
  }
};

const get: HttpMethod = (url: string, params?: any, config?: AxiosRequestConfig) => {
  return new Promise((resolve) => {
    instance
      .get(url, {
        params,
        ...config
      })
      .then((res: AxiosResponse) => {
        handleRes(res, resolve);
      })
      .catch((err: AxiosError) => {
        console.error(err);
        resolve(null);
      });
  });
};

const deleteMethod: any = (url: string, data: any, config?: AxiosRequestConfig) => {
  return new Promise((resolve) => {
    instance
      .delete(url, {
        data: {
          ...data
        },
        ...config
      })
      .then((res: AxiosResponse) => {
        handleRes(res, resolve);
      })
      .catch((err: AxiosError) => {
        console.error(err);
        resolve(null);
      });
  });
};

type RequestMethod = 'post' | 'put';

const unGet = (type: RequestMethod) => {
  return (url: string, data: any, config?: AxiosRequestConfig) => {
    return new Promise((resolve) => {
      instance[type](url, data, {
        ...config
      })
        .then((res: AxiosResponse) => {
          handleRes(res, resolve);
        })
        .catch((err: AxiosError) => {
          console.error(err);
          resolve(null);
        });
    });
  };
};

const request: HttpMethod = (url: string, params?: any, type: Method = 'get', config?: AxiosRequestConfig) => {
  return new Promise((resolve) => {
    /**
     * 处理response数据
     * @param res
     */
    const handleRes = (res: AxiosResponse) => {
      if (res.status === 200) {
        if (res.data.ret === 0) {
          resolve(res.data.retdata || typeof res.data.retdata === 'boolean' ? res.data.retdata : {});
        } else {
          const { retmsg } = res.data;
          Toast.fail(retmsg);
          resolve(null);
        }
      } else {
        const { statusText } = res;
        Toast.fail(statusText);
        resolve(null);
      }
    };

    if (type === 'get') {
      instance
        .get(url, {
          params,
          ...config
        })
        .then((res: AxiosResponse) => {
          handleRes(res);
        })
        .catch((err: AxiosError) => {
          console.error(err);
          resolve(null);
        });
    } else if (type === 'delete') {
      instance
        .delete(url, {
          data: {
            ...params
          },
          ...config
        })
        .then((res: AxiosResponse) => {
          handleRes(res);
        })
        .catch((err: AxiosError) => {
          console.error(err);
          resolve(null);
        });
    } else {
      // @ts-ignore
      instance[type](url, params, {
        ...config
      })
        .then((res: AxiosResponse) => {
          handleRes(res);
        })
        .catch((err: AxiosError) => {
          resolve(null);
          console.error(err);
        });
    }
  });
};

export type HttpFC = (param: { [key: string]: any }) => Promise<any>;
export type VoidFC = () => Promise<any>;

export default {
  get,
  post: unGet('post'),
  delete: deleteMethod,
  put: unGet('put'),
  request
};
