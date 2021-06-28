using IncidentsHandler.Services.DTOs.BaseEntityDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace IncidentsHandler.Services.DTOs
{
    public class IncidentsStaticticsDto
    {
        public int TotalUnClosedIncidents { get; set; }
        public int TotalClosedIncidents { get; set; }
    }
}