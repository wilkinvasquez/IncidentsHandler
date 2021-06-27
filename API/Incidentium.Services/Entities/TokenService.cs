using Incidentium.Services.Interfaces;
using Incidentium.Services.Results;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Incidentium.Services.Entities
{
    public class TokenService : ITokenService
    {
        private IConfiguration _configuration;
        private IHttpContextAccessor _httpContextAccessor;

        public TokenService(IConfiguration configuration, IHttpContextAccessor httpContextAccessor)
        {
            _configuration = configuration;
            _httpContextAccessor = httpContextAccessor;
        }

        public string GenerateToken(AuthenticationResult authenticationResult)
        {
            byte[] key = Encoding.ASCII.GetBytes(_configuration.GetValue<string>("JwtSecretKey"));

            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[] {
                    new Claim(ClaimTypes.Name, authenticationResult.Id.ToString()),
                    new Claim(ClaimTypes.Role, "Admin")
                }),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return tokenString;
        }

        public int GetUserId()
        {
            string token = _httpContextAccessor.HttpContext.Request.Headers["Authorization"].ToString().Split(' ')[1];
            byte[] key = Encoding.ASCII.GetBytes(_configuration.GetValue<string>("JwtSecretKey"));
            var handler = new JwtSecurityTokenHandler();
            var validations = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateLifetime = false
            };

            ClaimsPrincipal claims = handler.ValidateToken(token, validations, out var tokenSecure);

            return Convert.ToInt32(claims.Identity.Name);
        }
    }
}
