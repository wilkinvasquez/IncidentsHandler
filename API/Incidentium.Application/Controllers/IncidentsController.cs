using Incidentium.Services.DTOs;
using Incidentium.Services.Interfaces;
using Incidentium.Services.Result;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace Incidentium.Application.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class IncidentsController : ControllerBase
    {
        private readonly IIncidentService _incidentService;

        public IncidentsController(IIncidentService incidentService)
        {
            _incidentService = incidentService;
        }

        // GET: api/Incidents
        [Authorize(Roles = "Admin")]
        [HttpGet]
        public Result Get()
        {
            Result result = new Result();

            try
            {
                ICollection<IncidentDto> incidentsDto = _incidentService.GetAll<IncidentDto>();

                result.Success = true;
                result.Data = incidentsDto;
            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;
            }

            return result;
        }

        // GET: api/Incidents/5
        [Authorize(Roles = "Admin")]
        [HttpGet("{id}")]
        public Result Get(int id)
        {
            Result result = new Result();

            try
            {
                IncidentDto incidentDto = _incidentService.Get<IncidentDto>(id);

                result.Success = true;
                result.Data = incidentDto;

            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;

            }

            return result;
        }

        // POST: api/Incidents
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public Result Post([FromBody] IncidentDto incidentDto)
        {
            Result result = new Result();

            try
            {
                _incidentService.Create(incidentDto);

                result.Success = true;
            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;
            }

            return result;
        }

        // PUT: api/Incidents/5
        [Authorize(Roles = "Admin")]
        [HttpPut]
        public Result Put([FromBody] IncidentDto incidentDto)
        {
            Result result = new Result();

            try
            {
                _incidentService.Update(incidentDto);

                result.Success = true;
            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;
            }

            return result;
        }

        // DELETE: api/Incidents/5
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public Result Delete(int id)
        {
            Result result = new Result();

            try
            {
                _incidentService.Delete(id);

                result.Success = true;
            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;
            }

            return result;
        }

        // GET: api/Incidents/5/incidentComments
        [Authorize(Roles = "Admin")]
        [HttpGet("{incidentId}/comments")]
        public Result GetIncidentComments(int incidentId)
        {
            Result result = new Result();

            try
            {
                ICollection<IncidentCommentDto> incidentCommentsDto = _incidentService.GetIncidentComments(incidentId);

                result.Success = true;
                result.Data = incidentCommentsDto;

            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;
            }

            return result;
        }

        // GET: api/Incidents/statistics
        [Authorize(Roles = "Admin")]
        [HttpGet("statistics")]
        public Result GetIncidentsStatictics()
        {
            Result result = new Result();

            try
            {
                IncidentsStaticticsDto incidentsStatisticsDto = _incidentService.GetIncidentsStatictics();

                result.Success = true;
                result.Data = incidentsStatisticsDto;

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
