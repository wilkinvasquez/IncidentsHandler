using IncidentsHandler.Domain.BaseEntity;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace IncidentsHandler.Domain.Models
{
    [DataContract]
    public class Department : Entity
    {
        [DataMember]
        public string Name { get; set; }
    }
}
