using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Gallería.Migrations
{
    public partial class addMatriculaFechNacGallo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Nombre",
                table: "Gallo");

            migrationBuilder.AddColumn<string>(
                name: "Alias",
                table: "Gallo",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "FechaNacimiento",
                table: "Gallo",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Matricula",
                table: "Gallo",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Alias",
                table: "Gallo");

            migrationBuilder.DropColumn(
                name: "FechaNacimiento",
                table: "Gallo");

            migrationBuilder.DropColumn(
                name: "Matricula",
                table: "Gallo");

            migrationBuilder.AddColumn<string>(
                name: "Nombre",
                table: "Gallo",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
