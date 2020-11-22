using Microsoft.EntityFrameworkCore.Migrations;

namespace Gallería.Migrations
{
    public partial class cambios2_1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Familia_TipoGallo_TipoGalloId",
                table: "Familia");

            migrationBuilder.DropIndex(
                name: "IX_Familia_TipoGalloId",
                table: "Familia");

            migrationBuilder.DropColumn(
                name: "TipoGalloId",
                table: "Familia");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TipoGalloId",
                table: "Familia",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Familia_TipoGalloId",
                table: "Familia",
                column: "TipoGalloId");

            migrationBuilder.AddForeignKey(
                name: "FK_Familia_TipoGallo_TipoGalloId",
                table: "Familia",
                column: "TipoGalloId",
                principalTable: "TipoGallo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
