using Incidentium.Domain.BaseEntity;
using System;
using System.Collections.Generic;

namespace Incidentium.Domain.Models
{
    public class Incident : Entity
    {
        public int? UserAssignedId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime? CloseTime { get; set; }
        public bool IsClosed { get; set; }
        public string CloseComment { get; set; }

        public int UserReportId { get; set; }
        public User UserReport { get; set; }

        public int PriorityId { get; set; }
        public Priority Priority { get; set; }

        public int DepartmentId { get; set; }
        public Department Department { get; set; }

        public ICollection<IncidentHistory> IncidentHistories { get; set; }
    }
}
