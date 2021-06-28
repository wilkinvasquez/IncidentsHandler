using System.Collections.Generic;
using IncidentsHandler.Data.Repositories.Interfaces;
using IncidentsHandler.Domain.Models;
using IncidentsHandler.Services.DTOs;
using IncidentsHandler.Services.Interfaces.BaseInterface;
using IncidentsHandler.Services.Results;

namespace IncidentsHandler.Services.Interfaces
{
    public interface IUserService : IBaseService<User, IUserRepository>
    {
        AuthenticationResult Authenticate(CredentialsDto credentialsDto);
        ICollection<IncidentDto> GetUserAssignedIncidents(int userId);
    }
}
