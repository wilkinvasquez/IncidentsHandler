using IncidentsHandler.Data.Context;
using IncidentsHandler.Data.Repositories.Entities.BaseRepository;
using IncidentsHandler.Data.Repositories.Interfaces;
using IncidentsHandler.Domain.Models;

namespace IncidentsHandler.Data.Repositories.Entities
{
    public class DepartmentRepository : BaseRepository<Department>, IDepartmentRepository
    {
        public DepartmentRepository(IncidentsHandlerDbContext context) : base(context)
        {

        }
    }
}
