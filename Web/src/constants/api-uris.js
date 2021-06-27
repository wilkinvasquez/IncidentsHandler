const baseUrl = "https://localhost:44371";

const ApiURIs = {
    LOGIN:
        `${baseUrl}/api/users/login`,
    USERS:
        `${baseUrl}/api/users`,
    DEPARTMENTS:
        `${baseUrl}/api/departments`,
    POSITIONS:
        `${baseUrl}/api/positions`,
    SLAs:
        `${baseUrl}/api/slas`,
    PRIORITIES:
        `${baseUrl}/api/priorities`,
    INCIDENTS:
        `${baseUrl}/api/incidents`,
    INCIDENTS_HISTORIES:
        `${baseUrl}/api/incidentshistories`
}

export default ApiURIs;