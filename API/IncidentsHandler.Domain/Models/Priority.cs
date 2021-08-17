using IncidentsHandler.Domain.BaseEntity;
using System.Collections.Generic;

namespace IncidentsHandler.Domain.Models
{
    public class Priority : Entity
    {
        public string Name { get; set; }

        public int SlaId { get; set; }
        public SLA SLA { get; set; }

        public ICollection<Incident> Incidents { get; set; }
    }
}
