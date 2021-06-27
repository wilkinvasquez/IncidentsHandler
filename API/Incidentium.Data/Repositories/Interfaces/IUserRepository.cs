using Incidentium.Data.Repositories.Interfaces.BaseInterface;
using Incidentium.Domain.Models;

namespace Incidentium.Data.Repositories.Interfaces
{
    public interface IUserRepository : IBaseRepository<User>
    {
        User Authenticate(string username, string password);
    }
}
