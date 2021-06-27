using Incidentium.Services.DTOs.BaseEntityDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Incidentium.Services.DTOs
{
    public class PriorityDto : EntityDto
    {
        public string Name { get; set; }
        public int SlaId { get; set; }
    }
}
