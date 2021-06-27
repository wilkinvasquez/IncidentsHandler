using AutoMapper;
using Incidentium.Data.Repositories.Interfaces;
using Incidentium.Domain.Models;
using Incidentium.Services.Entities.BaseService;
using Incidentium.Services.Interfaces;
using Incidentium.Services.Interfaces.BaseInterface;

namespace Incidentium.Services.Entities
{
    public class SLAService : BaseService<SLA, ISLARepository>, ISLAService
    {
        public SLAService(ISLARepository baseRepository, IMapper mapper, ITokenService tokenService) : base(baseRepository, mapper, tokenService)
        {

        }
    }
}
