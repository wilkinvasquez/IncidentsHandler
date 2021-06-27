using Incidentium.Services.DTOs.BaseEntityDto;

namespace Incidentium.Services.DTOs
{
    public class SLADto : EntityDto
    {
        public string Description { get; set; }
        public int HoursQuantity { get; set; }
    }
}
