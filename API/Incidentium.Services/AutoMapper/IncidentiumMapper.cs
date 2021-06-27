using AutoMapper;
using Incidentium.Domain.Models;
using Incidentium.Services.DTOs;
using Incidentium.Services.Results;

namespace Incidentium.Services.AutoMapper
{
    public class IncidentiumMapper : Profile
    {
        public IncidentiumMapper()
        {
            // Department

            CreateMap<Department, DepartmentDto>().ReverseMap();

            // Position

            CreateMap<Position, PositionDto>().ReverseMap();

            // User

            CreateMap<User, UserDto>().ReverseMap();
            CreateMap<User, AuthenticationResult>().ReverseMap();

            // User

            CreateMap<IncidentHistory, IncidentHistoryDto>().ReverseMap();

            // SLA

            CreateMap<SLA, SLADto>().ReverseMap();

            // Priority

            CreateMap<Priority, PriorityDto>().ReverseMap();

            // Incident

            CreateMap<Incident, IncidentDto>().ReverseMap();
        }
    }
}
