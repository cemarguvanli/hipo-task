import 'whatwg-fetch';
import config from './config';


function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function getParams(params = {}) {
  const searchParams = new URLSearchParams();
  const reqParams = {
    v: config.VERSION_DATE,
    client_id: config.CLIENT_ID,
    client_secret: config.CLIENT_SECRET,
    ...params,
  };

  Object.keys(reqParams).forEach((key) => searchParams.append(key, reqParams[key]));
  return searchParams;
}

export default function request(uri, options = {}) {
  return fetch(`${config.BASE_URL}${uri}?${getParams(options.params)}`, {
    method: 'GET',
    ...options,
    headers: {
      'Accept-Language': 'en',
    }
  })
    .then(checkStatus)
    .then(parseJSON);
}
