using IncidentsHandler.Data.Context;
using IncidentsHandler.Domain.Models;
using Services.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Linq;
public class DepartmentService : IDepartmentService
{
    private readonly IncidentsHandlerDbContext _context;

    public DepartmentService(IncidentsHandlerDbContext context)
    {
        _context = context;
    }

    public Department Department(int id)
    {
        var department =  _context.Departments.FirstOrDefault(x => x.Id == id);

        return department;
    }

    public List<Department> Departments(Department department)
    {
        var departments =  _context.Departments.ToList();

        return departments;
    }
}