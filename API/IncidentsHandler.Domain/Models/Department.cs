using IncidentsHandler.Domain.BaseEntity;
using System.Collections.Generic;

namespace IncidentsHandler.Domain.Models
{
    public class Department : Entity
    {
        public string Name { get; set; }

        public ICollection<Position> Positions { get; set; }

        public ICollection<Incident> Incidents { get; set; }
    }
}
