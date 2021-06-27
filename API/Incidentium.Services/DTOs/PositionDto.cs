using Incidentium.Services.DTOs.BaseEntityDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Incidentium.Services.DTOs
{
    public class PositionDto : EntityDto
    {
        public string Name { get; set; }
        public int DepartmentId { get; set; }
    }
}
