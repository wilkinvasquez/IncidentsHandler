const getToken = () => {
    return document.cookie.split(';').filter(element => element.includes('incidentiumToken'))[0].split('=')[1];
}

const TokenService = {
    getToken
};

export default TokenService;