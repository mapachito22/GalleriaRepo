using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Gallería.Migrations
{
    public partial class changeImagenModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ruta",
                table: "Imagen");

            migrationBuilder.AddColumn<byte[]>(
                name: "imagen",
                table: "Imagen",
                type: "varbinary(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "imagen",
                table: "Imagen");

            migrationBuilder.AddColumn<string>(
                name: "ruta",
                table: "Imagen",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);
        }
    }
}
