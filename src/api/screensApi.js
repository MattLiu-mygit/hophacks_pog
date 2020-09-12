import { handleResponse, handleError } from './apiUtils';
const baseUrl =
  'http://localhost:' + (process.env.PORT || 8081) + '/api/screens/';
//    const baseUrl = 'https://twitch_extension.herokuapp.com/api/scores';

export async function getData() {
  return await fetch(baseUrl).then(handleResponse).catch(handleError);
}

export async function setData(entry) {
  return fetch(baseUrl, {
    method: 'POST', // POST for create, PUT to update when id already exists.
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(entry),
  })
    .then(handleResponse)
    .catch(handleError);
}

export async function updateData(entry) {
  return fetch(baseUrl, {
    //+ `${entry.id}`, {
    method: 'PUT', // POST for create, PUT to update when id already exists.
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(entry),
    // _id: entry._id,
  })
    .then(handleResponse)
    .catch(handleError);
}

export async function deleteData(entry) {
  return fetch(baseUrl, {
    //+ `${entry.id}`, {
    method: 'DELETE', // POST for create, PUT to update when id already exists.
    headers: { 'content-type': 'application/json' },
    // _id: entry._id,
  })
    .then((res) => {
      if (res.ok) {
        return Promise.resolve('User deleted.');
      } else {
        return Promise.reject('An error occurred.');
      }
    })
    .then((res) => console.log(res));
}
