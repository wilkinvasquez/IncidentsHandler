using System;
using System.Collections.Generic;
using System.Text;

namespace Incidentium.Services.Results
{
    public class AuthenticationResult
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public string Username { get; set; }
        public string Token { get; set; }
    }
}
