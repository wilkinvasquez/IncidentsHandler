import ApiURIs from '../constants/api-uris';
import TokenService from '../services/token-service';

const getById = id => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${ApiURIs.POSITIONS}/${id}`, {
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
        fetch(ApiURIs.POSITIONS, {
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

const create = position => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${ApiURIs.POSITIONS}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenService.getToken()}`
            },
            body: JSON.stringify(position)
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

const update = position => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${ApiURIs.POSITIONS}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenService.getToken()}`
            },
            body: JSON.stringify(position)
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
        fetch(`${ApiURIs.POSITIONS}/${id}`, {
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

const PositionsService = {
    getById,
    getAll,
    create,
    update,
    remove
}

export default PositionsService;