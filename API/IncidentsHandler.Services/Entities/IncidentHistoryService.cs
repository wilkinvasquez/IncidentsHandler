﻿using AutoMapper;
using IncidentsHandler.Data.Repositories.Interfaces;
using IncidentsHandler.Domain.Models;
using IncidentsHandler.Services.Entities.BaseService;
using IncidentsHandler.Services.Interfaces;
using IncidentsHandler.Services.Interfaces.BaseInterface;

namespace IncidentsHandler.Services.Entities
{
    public class IncidentHistoryService : BaseService<IncidentHistory, IIncidentHistoryRepository>, IIncidentHistoryService
    {
        public IncidentHistoryService(IIncidentHistoryRepository baseRepository, IMapper mapper, ITokenService tokenService) : base(baseRepository, mapper, tokenService)
        {

        }
    }
}
