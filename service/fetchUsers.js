function fetchUsers() {
  let data;
  const linkOfJsonFile = 'https://jsonplaceholder.typicode.com/users';
  fetch(linkOfJsonFile)
    .then((response) => response.json())
    // eslint-disable-next-line no-return-assign
    .then((content) => data = content);

  const callbackFunction = () => data;

  return callbackFunction;
}

export default fetchUsers;
