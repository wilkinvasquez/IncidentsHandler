using IncidentsHandler.Data.Context;
using IncidentsHandler.Data.Repositories.Entities.BaseRepository;
using IncidentsHandler.Data.Repositories.Interfaces;
using IncidentsHandler.Domain.Models;
using System.Linq;

namespace IncidentsHandler.Data.Repositories.Entities
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(IncidentsHandlerDbContext context) : base(context)
        {

        }

        public User Authenticate(string username, string password)
        {
            return _context.Users.FirstOrDefault(u => u.Username == username && u.Password == password);
        }
    }
}
