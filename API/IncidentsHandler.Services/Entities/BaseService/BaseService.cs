using AutoMapper;
using IncidentsHandler.Data.Repositories.Interfaces.BaseInterface;
using IncidentsHandler.Domain.BaseEntity;
using IncidentsHandler.Services.DTOs.BaseEntityDto;
using IncidentsHandler.Services.Interfaces;
using IncidentsHandler.Services.Interfaces.BaseInterface;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace IncidentsHandler.Services.Entities.BaseService
{
    public class BaseService<T, U> : IBaseService<T, U> where T : Entity where U : IBaseRepository<T>
    {
        protected readonly U _baseRepository;
        protected readonly IMapper _mapper;
        protected readonly ITokenService _tokenService;

        public BaseService(U baseRepository, IMapper mapper, ITokenService tokenService)
        {
            _baseRepository = baseRepository;
            _mapper = mapper;
            _tokenService = tokenService;
        }

        public V Get<V>(int id) where V : EntityDto
        {
            Expression<Func<T, bool>> predicate = t => t.Id == id;

            return _mapper.Map<V>(_baseRepository.Get(predicate));
        }

        public ICollection<V> GetAll<V>() where V : EntityDto
        {
            return _mapper.Map<ICollection<V>>(_baseRepository.GetAllList());
        }

        public int Create<V>(V entity) where V : EntityDto
        {
            entity.CreationTime = DateTime.Now;
            entity.CreatorUserId = _tokenService.GetUserId(); ;

            return _baseRepository.Create(_mapper.Map<T>(entity));
        }

        public void Update<V>(V entity) where V : EntityDto
        {
            entity.LastModificationTime = DateTime.Now;
            entity.LastModifierUserId = _tokenService.GetUserId();

            _baseRepository.Update(_mapper.Map<T>(entity));
        }

        public void Delete(int id)
        {
            Expression<Func<T, bool>> predicate = t => t.Id == id;

            T entity = _baseRepository.Get(predicate);
            entity.IsDeleted = true;
            entity.DeletionTime = DateTime.Now;
            entity.DeleterUserId = _tokenService.GetUserId();

            _baseRepository.Update(entity);
        }
    }
}
