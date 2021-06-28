using IncidentsHandler.Data.Repositories.Interfaces.BaseInterface;
using IncidentsHandler.Domain.Models;

namespace IncidentsHandler.Data.Repositories.Interfaces
{
    public interface IUserRepository : IBaseRepository<User>
    {
        User Authenticate(string username, string password);
    }
}
