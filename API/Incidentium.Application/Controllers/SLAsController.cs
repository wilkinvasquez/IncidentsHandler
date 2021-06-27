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
    public class SLAsController : ControllerBase
    {
        private readonly ISLAService _slaService;

        public SLAsController(ISLAService slaService)
        {
            _slaService = slaService;
        }

        // GET: api/SLAs
        [Authorize(Roles = "Admin")]
        [HttpGet]
        public Result Get()
        {
            Result result = new Result();

            try
            {
                ICollection<SLADto> slasDto = _slaService.GetAll<SLADto>();

                result.Success = true;
                result.Data = slasDto;
            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;
            }

            return result;
        }

        // GET: api/SLAs/5
        [Authorize(Roles = "Admin")]
        [HttpGet("{id}")]
        public Result Get(int id)
        {
            Result result = new Result();

            try
            {
                SLADto slaDto = _slaService.Get<SLADto>(id);

                result.Success = true;
                result.Data = slaDto;

            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;

            }

            return result;
        }

        // POST: api/SLAs
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public Result Post([FromBody] SLADto slaDto)
        {
            Result result = new Result();

            try
            {
                _slaService.Create(slaDto);

                result.Success = true;
            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;
            }

            return result;
        }

        // PUT: api/SLAs/5
        [Authorize(Roles = "Admin")]
        [HttpPut]
        public Result Put([FromBody] SLADto slaDto)
        {
            Result result = new Result();

            try
            {
                _slaService.Update(slaDto);

                result.Success = true;
            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;
            }

            return result;
        }

        // DELETE: api/SLAs/5
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public Result Delete(int id)
        {
            Result result = new Result();

            try
            {
                _slaService.Delete(id);

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
