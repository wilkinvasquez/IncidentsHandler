using Incidentium.Data.Repositories.Interfaces.BaseInterface;
using Incidentium.Domain.BaseEntity;
using Incidentium.Services.DTOs.BaseEntityDto;
using System.Collections.Generic;

namespace Incidentium.Services.Interfaces.BaseInterface
{
    public interface IBaseService<T, U> where T : Entity where U : IBaseRepository<T>
    {
        V Get<V>(int id) where V : EntityDto;
        ICollection<V> GetAll<V>() where V : EntityDto;
        int Create<V>(V entity) where V : EntityDto;
        void Update<V>(V entity) where V : EntityDto;
        void Delete(int id);
    }
}
