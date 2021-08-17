using AutoMapper;
using IncidentsHandler.Data.Repositories.Entities;
using IncidentsHandler.Data.Repositories.Interfaces;
using IncidentsHandler.Data.Repositories.Interfaces.BaseInterface;
using IncidentsHandler.Domain.Models;
using IncidentsHandler.Services.Entities.BaseService;
using IncidentsHandler.Services.Interfaces;

namespace IncidentsHandler.Services.Entities
{
    public class DepartmentService : BaseService<Department, IDepartmentRepository>, IDepartmentService
    {
        public DepartmentService(IDepartmentRepository baseRepository, IMapper mapper, ITokenService tokenService) : base(baseRepository, mapper, tokenService)
        {
           
        }
    }
}
