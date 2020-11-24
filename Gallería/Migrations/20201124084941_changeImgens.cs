using Microsoft.EntityFrameworkCore.Migrations;

namespace Gallería.Migrations
{
    public partial class changeImgens : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "type",
                table: "Imagen",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "type",
                table: "Imagen");
        }
    }
}
