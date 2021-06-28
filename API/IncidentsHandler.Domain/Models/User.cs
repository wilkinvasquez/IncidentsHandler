using IncidentsHandler.Domain.BaseEntity;
using System;
using System.Collections.Generic;

namespace IncidentsHandler.Domain.Models
{
    public class User : Entity
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
        public Position Position { get; set; }

        public ICollection<Incident> Incidents { get; set; }
    }
}
