using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace IncidentsHandler.Data.Repositories.Interfaces.BaseInterface
{
    public interface IBaseRepository<T> where T : class
    {
        T Get(Expression<Func<T, bool>> expression);
        IQueryable<T> GetAll();
        ICollection<T> GetAllList();
        int Create(T entity);
        void Update(T entity);
    }
}
