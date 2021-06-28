using IncidentsHandler.Services.DTOs.BaseEntityDto;
using System;
using System.Collections.Generic;
using System.Text;

namespace IncidentsHandler.Services.DTOs
{
    public class UserDto : EntityDto
    {
        public string Name { get; set; }
        public string Lastname { get; set; }
        public string IdentificationCard { get; set; }
        public string Mail { get; set; }
        public string Phone { get; set; }
        public DateTime Birthdate { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public int PositionId { get; set; }
        public string Token { get; set; }
    }
}
