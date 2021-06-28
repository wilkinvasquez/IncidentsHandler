using IncidentsHandler.Services.DTOs.BaseEntityDto;

namespace IncidentsHandler.Services.DTOs
{
    public class SLADto : EntityDto
    {
        public string Description { get; set; }
        public int HoursQuantity { get; set; }
    }
}
