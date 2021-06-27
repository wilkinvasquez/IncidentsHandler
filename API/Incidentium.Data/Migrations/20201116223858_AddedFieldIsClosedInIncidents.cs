using Microsoft.EntityFrameworkCore.Migrations;

namespace Incidentium.Data.Migrations
{
    public partial class AddedFieldIsClosedInIncidents : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsClosed",
                table: "Incidents",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsClosed",
                table: "Incidents");
        }
    }
}
