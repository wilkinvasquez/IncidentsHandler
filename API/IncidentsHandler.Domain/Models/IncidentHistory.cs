using IncidentsHandler.Domain.BaseEntity;

namespace IncidentsHandler.Domain.Models
{
    public class IncidentHistory : Entity
    {
        public string Comment { get; set; }

        public int IncidentId { get; set; }
        public Incident Incident { get; set; }
    }
}
