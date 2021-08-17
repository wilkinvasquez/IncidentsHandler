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
    public class PrioritiesController : ControllerBase
    {
        private readonly IPriorityService _priorityService;

        public PrioritiesController(IPriorityService priorityService)
        {
            _priorityService = priorityService;
        }

        // GET: api/Prioritys
        [Authorize(Roles = "Admin")]
        [HttpGet]
        public Result Get()
        {
            Result result = new Result();

            try
            {
                ICollection<PriorityDto> prioritysDto = _priorityService.GetAll<PriorityDto>();

                result.Success = true;
                result.Data = prioritysDto;
            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;
            }

            return result;
        }

        // GET: api/Prioritys/5
        [Authorize(Roles = "Admin")]
        [HttpGet("{id}")]
        public Result Get(int id)
        {
            Result result = new Result();

            try
            {
                PriorityDto priorityDto = _priorityService.Get<PriorityDto>(id);

                result.Success = true;
                result.Data = priorityDto;

            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;

            }

            return result;
        }

        // POST: api/Prioritys
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public Result Post([FromBody] PriorityDto priorityDto)
        {
            Result result = new Result();

            try
            {
                _priorityService.Create(priorityDto);

                result.Success = true;
            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;
            }

            return result;
        }

        // PUT: api/Prioritys/5
        [Authorize(Roles = "Admin")]
        [HttpPut]
        public Result Put([FromBody] PriorityDto priorityDto)
        {
            Result result = new Result();

            try
            {
                _priorityService.Update(priorityDto);

                result.Success = true;
            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;
            }

            return result;
        }

        // DELETE: api/Prioritys/5
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public Result Delete(int id)
        {
            Result result = new Result();

            try
            {
                _priorityService.Delete(id);

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
