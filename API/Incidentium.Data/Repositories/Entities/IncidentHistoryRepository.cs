using Incidentium.Data.Context;
using Incidentium.Data.Repositories.Entities.BaseRepository;
using Incidentium.Data.Repositories.Interfaces;
using Incidentium.Domain.Models;

namespace Incidentium.Data.Repositories.Entities
{
    public class IncidentHistoryRepository : BaseRepository<IncidentHistory>, IIncidentHistoryRepository
    {
        public IncidentHistoryRepository(IncidentiumDbContext context) : base(context)
        {

        }
    }
}
