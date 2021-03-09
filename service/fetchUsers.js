function fetchUsers() {

    let data;
    var a='https://jsonplaceholder.typicode.com/users';
    fetch(a)
        .then(response => response.json())
        .then(content => data = content);

    const callbackFunction = () => {
        return data;
    };
    return callbackFunction;
}

export default fetchUsers;
