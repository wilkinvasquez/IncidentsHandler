import ApiURIs from '../constants/api-uris';
import TokenService from '../services/token-service';

const getById = id => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${ApiURIs.DEPARTMENTS}/${id}`, {
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
        fetch(ApiURIs.DEPARTMENTS, {
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

const create = department => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${ApiURIs.DEPARTMENTS}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenService.getToken()}`
            },
            body: JSON.stringify(department)
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

const update = department => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${ApiURIs.DEPARTMENTS}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenService.getToken()}`
            },
            body: JSON.stringify(department)
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
        fetch(`${ApiURIs.DEPARTMENTS}/${id}`, {
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

const DepartmentsService = {
    getById,
    getAll,
    create,
    update,
    remove
}

export default DepartmentsService;