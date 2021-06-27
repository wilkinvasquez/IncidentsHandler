using Incidentium.Domain.BaseEntity;
using System.Collections.Generic;

namespace Incidentium.Domain.Models
{
    public class SLA : Entity
    {
        public string Description { get; set; }
        public int HoursQuantity { get; set; }

        public ICollection<Priority> Priorities { get; set; }
    }
}
