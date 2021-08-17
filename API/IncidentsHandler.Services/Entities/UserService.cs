using AutoMapper;
using IncidentsHandler.Data.Repositories.Interfaces;
using IncidentsHandler.Domain.Models;
using IncidentsHandler.Services.DTOs;
using IncidentsHandler.Services.Entities.BaseService;
using IncidentsHandler.Services.Interfaces;
using IncidentsHandler.Services.Results;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace IncidentsHandler.Services.Entities
{
    public class UserService : BaseService<User, IUserRepository>, IUserService
    {
        private IUserRepository _userRepository { get; set; }
        private IIncidentRepository _incidentRepository { get; set; }

        public UserService(
            IUserRepository userRepository,
            IMapper mapper,
            ITokenService tokenService,
            IIncidentRepository incidentRepository
        ) : base(userRepository, mapper, tokenService)
        {
            _userRepository = userRepository;
            _incidentRepository = incidentRepository;
        }

        public AuthenticationResult Authenticate(CredentialsDto credentialsDto)
        {
            User user = _userRepository.Authenticate(credentialsDto.Username, credentialsDto.Password);
            
            if(user != null)
            {
                AuthenticationResult authenticationResult = _mapper.Map<AuthenticationResult>(user);

                string tokenString = _tokenService.GenerateToken(authenticationResult);

                authenticationResult.Token = tokenString;

                return authenticationResult;
            }
            
            return null;
        }

        public ICollection<IncidentDto> GetUserAssignedIncidents(int userId)
        {
            IQueryable<Incident> incidents = _incidentRepository.GetAll();

            return _mapper.Map<List<IncidentDto>>(incidents.Where(x => x.UserAssignedId == userId && x.IsClosed == false).ToList());
        }
    }
}
