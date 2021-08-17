using AutoMapper;
using IncidentsHandler.Domain.Models;
using IncidentsHandler.Services.DTOs;
using IncidentsHandler.Services.Results;

namespace IncidentsHandler.Services.AutoMapper
{
    public class IncidentsHandlerMapper : Profile
    {
        public IncidentsHandlerMapper()
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
