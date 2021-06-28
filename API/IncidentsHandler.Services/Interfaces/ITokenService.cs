using IncidentsHandler.Services.Results;
using System;
using System.Collections.Generic;
using System.Text;

namespace IncidentsHandler.Services.Interfaces
{
    public interface ITokenService
    {
        string GenerateToken(AuthenticationResult authenticationResult);
        int GetUserId();
    }
}
