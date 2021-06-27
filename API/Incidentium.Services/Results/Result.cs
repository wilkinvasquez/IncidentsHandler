using System;
using System.Collections.Generic;
using System.Text;

namespace Incidentium.Services.Result
{
    public class Result
    {
        public bool Success { get; set; }
        public object Data { get; set; }
        public string ErrorMessage { get; set; }
    }
}
