using System;
using System.Collections.Generic;
using System.Text;

namespace Incidentium.Services.DTOs.BaseEntityDto
{
    public class EntityDto
    {
        public int Id { get; set; }
        public DateTime CreationTime { get; set; }
        public int CreatorUserId { get; set; }
        public DateTime? LastModificationTime { get; set; }
        public int? LastModifierUserId { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime? DeletionTime { get; set; }
        public int? DeleterUserId { get; set; }
    }
}
