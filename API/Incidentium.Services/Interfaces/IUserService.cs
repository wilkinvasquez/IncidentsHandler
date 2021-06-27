using System.Collections.Generic;
using Incidentium.Data.Repositories.Interfaces;
using Incidentium.Domain.Models;
using Incidentium.Services.DTOs;
using Incidentium.Services.Interfaces.BaseInterface;
using Incidentium.Services.Results;

namespace Incidentium.Services.Interfaces
{
    public interface IUserService : IBaseService<User, IUserRepository>
    {
        AuthenticationResult Authenticate(CredentialsDto credentialsDto);
        ICollection<IncidentDto> GetUserAssignedIncidents(int userId);
    }
}
