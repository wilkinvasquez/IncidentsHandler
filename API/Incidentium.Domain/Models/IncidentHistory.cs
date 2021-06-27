using Incidentium.Domain.BaseEntity;

namespace Incidentium.Domain.Models
{
    public class IncidentHistory : Entity
    {
        public string Comment { get; set; }

        public int IncidentId { get; set; }
        public Incident Incident { get; set; }
    }
}
