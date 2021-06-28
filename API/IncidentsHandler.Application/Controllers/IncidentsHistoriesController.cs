using IncidentsHandler.Services.DTOs;
using IncidentsHandler.Services.Interfaces;
using IncidentsHandler.Services.Result;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace IncidentsHandler.Application.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class IncidentsHistoriesController : ControllerBase
    {
        private readonly IIncidentHistoryService _incidentHistoryService;

        public IncidentsHistoriesController(IIncidentHistoryService incidentHistoryService)
        {
            _incidentHistoryService = incidentHistoryService;
        }

        // GET: api/IncidentsHistories
        [Authorize(Roles = "Admin")]
        [HttpGet]
        public Result Get()
        {
            Result result = new Result();

            try
            {
                ICollection<IncidentHistoryDto> incidentHistorysDto = _incidentHistoryService.GetAll<IncidentHistoryDto>();

                result.Success = true;
                result.Data = incidentHistorysDto;
            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;
            }

            return result;
        }

        // GET: api/IncidentsHistories/5
        [Authorize(Roles = "Admin")]
        [HttpGet("{id}")]
        public Result Get(int id)
        {
            Result result = new Result();

            try
            {
                IncidentHistoryDto incidentHistoryDto = _incidentHistoryService.Get<IncidentHistoryDto>(id);

                result.Success = true;
                result.Data = incidentHistoryDto;

            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;

            }

            return result;
        }

        // POST: api/IncidentsHistories
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public Result Post([FromBody] IncidentHistoryDto incidentHistoryDto)
        {
            Result result = new Result();

            try
            {
                _incidentHistoryService.Create(incidentHistoryDto);

                result.Success = true;
            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;
            }

            return result;
        }

        // PUT: api/IncidentsHistories/5
        [Authorize(Roles = "Admin")]
        [HttpPut]
        public Result Put([FromBody] IncidentHistoryDto incidentHistoryDto)
        {
            Result result = new Result();

            try
            {
                _incidentHistoryService.Update(incidentHistoryDto);

                result.Success = true;
            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;
            }

            return result;
        }

        // DELETE: api/IncidentsHistories/5
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public Result Delete(int id)
        {
            Result result = new Result();

            try
            {
                _incidentHistoryService.Delete(id);

                result.Success = true;
            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;
            }

            return result;
        }
    }
}
