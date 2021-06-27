using AutoMapper;
using Incidentium.Data.Repositories.Entities;
using Incidentium.Data.Repositories.Interfaces;
using Incidentium.Data.Repositories.Interfaces.BaseInterface;
using Incidentium.Domain.Models;
using Incidentium.Services.Entities.BaseService;
using Incidentium.Services.Interfaces;

namespace Incidentium.Services.Entities
{
    public class DepartmentService : BaseService<Department, IDepartmentRepository>, IDepartmentService
    {
        public DepartmentService(IDepartmentRepository baseRepository, IMapper mapper, ITokenService tokenService) : base(baseRepository, mapper, tokenService)
        {
           
        }
    }
}
