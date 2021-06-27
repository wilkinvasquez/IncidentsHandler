using Incidentium.Domain.BaseEntity;
using System.Collections.Generic;

namespace Incidentium.Domain.Models
{
    public class Priority : Entity
    {
        public string Name { get; set; }

        public int SlaId { get; set; }
        public SLA SLA { get; set; }

        public ICollection<Incident> Incidents { get; set; }
    }
}
