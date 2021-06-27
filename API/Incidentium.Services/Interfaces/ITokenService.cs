using Incidentium.Services.Results;
using System;
using System.Collections.Generic;
using System.Text;

namespace Incidentium.Services.Interfaces
{
    public interface ITokenService
    {
        string GenerateToken(AuthenticationResult authenticationResult);
        int GetUserId();
    }
}
