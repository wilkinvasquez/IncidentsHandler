using IncidentsHandler.Data.Context;
using IncidentsHandler.Data.Repositories.Entities.BaseRepository;
using IncidentsHandler.Data.Repositories.Interfaces;
using IncidentsHandler.Domain.Models;

namespace IncidentsHandler.Data.Repositories.Entities
{
    public class PriorityRepository : BaseRepository<Priority>, IPriorityRepository
    {
        public PriorityRepository(IncidentsHandlerDbContext context) : base(context)
        {

        }
    }
}
