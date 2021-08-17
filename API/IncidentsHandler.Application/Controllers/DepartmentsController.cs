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
    public class DepartmentsController : ControllerBase
    {
        private readonly IDepartmentService _departmentService;

        public DepartmentsController(IDepartmentService departmentService)
        {
            _departmentService = departmentService;
        }

        // GET: api/Departments
        [Authorize(Roles = "Admin")]
        [HttpGet]
        public Result Get()
        {
            Result result = new Result();

            try
            {
                ICollection<DepartmentDto> departmentsDto = _departmentService.GetAll<DepartmentDto>();

                result.Success = true;
                result.Data = departmentsDto;
            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;
            }

            return result;
        }

        // GET: api/Departments/5
        [Authorize(Roles = "Admin")]
        [HttpGet("{id}")]
        public Result Get(int id)
        {
            Result result = new Result();

            try
            {
                DepartmentDto departmentDto = _departmentService.Get<DepartmentDto>(id);

                result.Success = true;
                result.Data = departmentDto;

            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;

            }

            return result;
        }

        // POST: api/Departments
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public Result Post([FromBody] DepartmentDto departmentDto)
        {
            Result result = new Result();

            try
            {
                _departmentService.Create(departmentDto);

                result.Success = true;
            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;
            }

            return result;
        }

        // PUT: api/Departments/5
        [Authorize(Roles = "Admin")]
        [HttpPut]
        public Result Put([FromBody] DepartmentDto departmentDto)
        {
            Result result = new Result();

            try
            {
                _departmentService.Update(departmentDto);

                result.Success = true;
            }
            catch (Exception exception)
            {
                result.Success = false;
                result.ErrorMessage = exception.InnerException.Message;
            }

            return result;
        }

        // DELETE: api/Departments/5
        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public Result Delete(int id)
        {
            Result result = new Result();

            try
            {
                _departmentService.Delete(id);

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
