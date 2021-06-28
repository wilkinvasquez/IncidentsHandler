using IncidentsHandler.Services.DTOs.BaseEntityDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace IncidentsHandler.Services.DTOs
{
    public class IncidentDto : EntityDto
    {
        public int? UserAssignedId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime? CloseTime { get; set; }
        public bool IsClosed { get; set; }
        public string CloseComment { get; set; }
        public int UserReportId { get; set; }
        public int PriorityId { get; set; }
        public int DepartmentId { get; set; }
    }
}
