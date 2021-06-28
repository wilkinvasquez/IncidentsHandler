using IncidentsHandler.Data.Repositories.Interfaces;
using IncidentsHandler.Domain.Models;
using IncidentsHandler.Services.Interfaces.BaseInterface;

namespace IncidentsHandler.Services.Interfaces
{
    public interface IIncidentHistoryService : IBaseService<IncidentHistory, IIncidentHistoryRepository>
    {

    }
}
