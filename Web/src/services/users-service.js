import ApiURIs from '../constants/api-uris';
import TokenService from '../services/token-service';

const getById = id => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${ApiURIs.USERS}/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${TokenService.getToken()}`
            }
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    resolve(result.data);
                }
                else {
                    reject(result.errorMessage);
                }
            })
            .catch(error => {
                reject(error.message);
            });
    });

    return promise;
}

const getAll = () => {
    const promise = new Promise((resolve, reject) => {
        fetch(ApiURIs.USERS, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${TokenService.getToken()}`
            }
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    resolve(result.data);
                }
                else {
                    reject(result.errorMessage);
                }
            })
            .catch(error => {
                reject(error.message);
            });
    });

    return promise;
}

const create = user => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${ApiURIs.USERS}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenService.getToken()}`
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    resolve();
                }
                else {
                    reject(result.errorMessage);
                }
            })
            .catch(error => {
                reject(error.message);
            });
    });

    return promise;
}

const update = user => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${ApiURIs.USERS}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenService.getToken()}`
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    resolve();
                }
                else {
                    reject(result.errorMessage);
                }
            })
            .catch(error => {
                reject(error.message);
            });
    });

    return promise;
}

const remove = id => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${ApiURIs.USERS}/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${TokenService.getToken()}`
            }
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    resolve(result.data);
                }
                else {
                    reject(result.errorMessage);
                }
            })
            .catch(error => {
                reject(error.message);
            });
    });

    return promise;
}

const login = (username, password) => {
    const promise = new Promise((resolve, reject) => {
        fetch(ApiURIs.LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    resolve(result.data);
                }
                else {
                    reject(result.errorMessage);
                }
            })
            .catch(error => {
                reject(error.message);
            });
    });

    return promise;
}

const getAssignedIncidents = userId => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${ApiURIs.USERS}/${userId}/incidents`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${TokenService.getToken()}`
            }
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    resolve(result.data);
                }
                else {
                    reject(result.errorMessage);
                }
            })
            .catch(error => {
                reject(error.message);
            });
    });

    return promise;
}

const UsersService = {
    getById,
    getAll,
    create,
    update,
    remove,
    login,
    getAssignedIncidents
}

export default UsersService;