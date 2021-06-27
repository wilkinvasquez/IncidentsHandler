using Incidentium.Domain.BaseEntity;
using System.Collections.Generic;

namespace Incidentium.Domain.Models
{
    public class Position : Entity
    {
        public string Name { get; set; }

        public int DepartmentId { get; set; }
        public Department Department { get; set; }

        public ICollection<User> Users { get; set; }
    }
}
