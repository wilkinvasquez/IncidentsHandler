import ApiURIs from '../constants/api-uris';
import TokenService from '../services/token-service';

const getById = id => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${ApiURIs.SLAs}/${id}`, {
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
        fetch(ApiURIs.SLAs, {
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

const create = sla => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${ApiURIs.SLAs}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenService.getToken()}`
            },
            body: JSON.stringify(sla)
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
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

const update = sla => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${ApiURIs.SLAs}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TokenService.getToken()}`
            },
            body: JSON.stringify(sla)
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
        fetch(`${ApiURIs.SLAs}/${id}`, {
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

const SLAsService = {
    getById,
    getAll,
    create,
    update,
    remove
}

export default SLAsService;