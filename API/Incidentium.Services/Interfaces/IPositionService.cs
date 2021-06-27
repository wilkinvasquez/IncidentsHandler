using Incidentium.Data.Repositories.Interfaces;
using Incidentium.Domain.Models;
using Incidentium.Services.Interfaces.BaseInterface;

namespace Incidentium.Services.Interfaces
{
    public interface IPositionService : IBaseService<Position, IPositionRepository>
    {

    }
}
