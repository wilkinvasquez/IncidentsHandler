using System.Collections.Generic;
using IncidentsHandler.Data.Repositories.Interfaces;
using IncidentsHandler.Domain.Models;
using IncidentsHandler.Services.DTOs;
using IncidentsHandler.Services.Interfaces.BaseInterface;

namespace IncidentsHandler.Services.Interfaces
{
    public interface IIncidentService : IBaseService<Incident, IIncidentRepository>
    {
        ICollection<IncidentCommentDto> GetIncidentComments(int incidentId);
        IncidentsStaticticsDto GetIncidentsStatictics();
    }
}
