using IncidentsHandler.Domain.BaseEntity;
using System.Collections.Generic;

namespace IncidentsHandler.Domain.Models
{
    public class SLA : Entity
    {
        public string Description { get; set; }
        public int HoursQuantity { get; set; }

        public ICollection<Priority> Priorities { get; set; }
    }
}
