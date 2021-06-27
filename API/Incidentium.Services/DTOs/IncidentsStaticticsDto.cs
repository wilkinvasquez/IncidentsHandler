using Incidentium.Services.DTOs.BaseEntityDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace Incidentium.Services.DTOs
{
    public class IncidentsStaticticsDto
    {
        public int TotalUnClosedIncidents { get; set; }
        public int TotalClosedIncidents { get; set; }
    }
}