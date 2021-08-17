using IncidentsHandler.Data.Context;
using IncidentsHandler.Data.Repositories.Entities.BaseRepository;
using IncidentsHandler.Data.Repositories.Interfaces;
using IncidentsHandler.Domain.Models;

namespace IncidentsHandler.Data.Repositories.Entities
{
    public class SLARepository : BaseRepository<SLA>, ISLARepository
    {
        public SLARepository(IncidentsHandlerDbContext context) : base(context)
        {

        }
    }
}
