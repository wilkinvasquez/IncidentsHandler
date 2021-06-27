using System.Collections.Generic;
using Incidentium.Data.Repositories.Interfaces;
using Incidentium.Domain.Models;
using Incidentium.Services.DTOs;
using Incidentium.Services.Interfaces.BaseInterface;

namespace Incidentium.Services.Interfaces
{
    public interface IIncidentService : IBaseService<Incident, IIncidentRepository>
    {
        ICollection<IncidentCommentDto> GetIncidentComments(int incidentId);
        IncidentsStaticticsDto GetIncidentsStatictics();
    }
}
