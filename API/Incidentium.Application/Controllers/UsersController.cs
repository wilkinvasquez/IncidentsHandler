using Incidentium.Services.DTOs;
using Incidentium.Services.Interfaces;
using Incidentium.Services.Result;
using Incidentium.Services.Results;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace Incidentium.Application.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        // GET: api/Users
        [Authorize(Roles = "Admin")]
        [HttpGet]
        public Result Get()
        {
            Result result = new Result();

            try
            {
                ICollection<UserDto> usersDto = _userService.GetAll<UserDto>();

                result.Success = true;
                result.Data = usersDto;
            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;
            }

            return result;
        }

        // GET: api/Users/5
        [Authorize(Roles = "Admin")]
        [HttpGet("{id}")]
        public Result Get(int id)
        {
            Result result = new Result();

            try
            {
                UserDto userDto = _userService.Get<UserDto>(id);

                result.Success = true;
                result.Data = userDto;

            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;

            }

            return result;
        }

        // POST: api/Users
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public Result Post([FromBody] UserDto userDto)
        {
            Result result = new Result();

            try
            {
                _userService.Create(userDto);

                result.Success = true;
            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;
            }

            return result;
        }

        // PUT: api/Users/5
        [Authorize(Roles = "Admin")]
        [HttpPut]
        public Result Put([FromBody] UserDto userDto)
        {
            Result result = new Result();

            try
            {
                _userService.Update(userDto);

                result.Success = true;
            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;
            }

            return result;
        }

        // DELETE: api/Users/5
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public Result Delete(int id)
        {
            Result result = new Result();

            try
            {
                _userService.Delete(id);

                result.Success = true;
            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;
            }

            return result;
        }

        // POST: api/Users/login
        [AllowAnonymous]
        [HttpPost("Login")]
        public Result Login([FromBody] CredentialsDto credentialsDto)
        {
            Result result = new Result();

            try
            {
                AuthenticationResult authenticationResult = _userService.Authenticate(credentialsDto);

                if (authenticationResult != null)
                {
                    result.Success = true;
                    result.Data = authenticationResult;
                }
                else
                {
                    result.Success = false;
                    result.ErrorMessage = "Invalid username or password.";
                }

                return result;
            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;

                return result;
            }
        }

        // GET: api/Users/5/incidents
        [Authorize(Roles = "Admin")]
        [HttpGet("{userId}/incidents")]
        public Result GetUserAssignedIncidents(int userId)
        {
            Result result = new Result();

            try
            {
                ICollection<IncidentDto> incidentsDto = _userService.GetUserAssignedIncidents(userId);

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
    }
}
