/* Api methods to call /functions */
const BASE_API_PATH = "/.netlify/functions";

const create = (data) => {
  return fetch(`${BASE_API_PATH}/todos-create`, {
    body: JSON.stringify(data),
    method: "POST",
  }).then((response) => {
    return response.json();
  });
};

const readAll = () => {
  return fetch(`${BASE_API_PATH}/todos-read-all`).then((response) => {
    return response.json();
  });
};

const update = (todoId, data) => {
  return fetch(`${BASE_API_PATH}/todos-update/${todoId}`, {
    body: JSON.stringify(data),
    method: "POST",
  }).then((response) => {
    return response.json();
  });
};

const deleteTodo = (todoId) => {
  return fetch(`${BASE_API_PATH}/todos-delete/${todoId}`, {
    method: "POST",
  }).then((response) => {
    return response.json();
  });
};

const batchDeleteTodo = (todoIds) => {
  return fetch(`${BASE_API_PATH}/todos-delete-batch`, {
    body: JSON.stringify({
      ids: todoIds,
    }),
    method: "POST",
  }).then((response) => {
    return response.json();
  });
};

export default {
  create: create,
  readAll: readAll,
  update: update,
  delete: deleteTodo,
  batchDelete: batchDeleteTodo,
};
