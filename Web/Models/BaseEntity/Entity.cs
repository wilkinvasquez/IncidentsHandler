using System;
using System.Runtime.Serialization;

namespace IncidentsHandler.Domain.BaseEntity
{
    [DataContract]
    public class Entity
    {
        public int Id { get; set; }

        [DataMember]
        public DateTime CreationTime { get; set; }

        [DataMember]
        public int CreatorUserId { get; set; }

        [DataMember]
        public DateTime? LastModificationTime { get; set; }

        [DataMember]
        public int? LastModifierUserId { get; set; }

        [DataMember]
        public bool IsDeleted { get; set; }

        [DataMember]
        public DateTime? DeletionTime { get; set; }

        [DataMember]
        public int? DeleterUserId { get; set; }
    }
}
