using Incidentium.Data.Context;
using Incidentium.Data.Repositories.Entities.BaseRepository;
using Incidentium.Data.Repositories.Interfaces;
using Incidentium.Domain.Models;
using System.Linq;

namespace Incidentium.Data.Repositories.Entities
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(IncidentiumDbContext context) : base(context)
        {

        }

        public User Authenticate(string username, string password)
        {
            return _context.Users.FirstOrDefault(u => u.Username == username && u.Password == password);
        }
    }
}
