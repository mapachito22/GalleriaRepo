using Microsoft.EntityFrameworkCore.Migrations;

namespace Gallería.Migrations
{
    public partial class AddNotaInGallo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Notas",
                table: "Gallo",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Notas",
                table: "Gallo");
        }
    }
}
