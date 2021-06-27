using Incidentium.Services.DTOs.BaseEntityDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Incidentium.Services.DTOs
{
    public class IncidentHistoryDto : EntityDto
    {
        public string Comment { get; set; }
        public int IncidentId { get; set; }
    }
}
