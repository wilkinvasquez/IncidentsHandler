using System.Collections.Generic;
using System.ServiceModel;
using IncidentsHandler.Domain.Models;

namespace Services.Entities
{
    [ServiceContract]
    public interface IDepartmentService
    {

        [OperationContract]
        Department Department(int id);

        [OperationContract]
        List<Department> Departments(Department department);
    }
}