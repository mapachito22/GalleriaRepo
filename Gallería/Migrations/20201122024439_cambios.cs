using Microsoft.EntityFrameworkCore.Migrations;

namespace Gallería.Migrations
{
    public partial class cambios : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Familia_TipoGallo_Id_TipoGallo",
                table: "Familia");

            migrationBuilder.RenameColumn(
                name: "Id_TipoGallo",
                table: "Familia",
                newName: "TipoGalloId");

            migrationBuilder.RenameIndex(
                name: "IX_Familia_Id_TipoGallo",
                table: "Familia",
                newName: "IX_Familia_TipoGalloId");

            migrationBuilder.AddColumn<int>(
                name: "Familiar",
                table: "Familia",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Familia_TipoGallo_TipoGalloId",
                table: "Familia",
                column: "TipoGalloId",
                principalTable: "TipoGallo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Familia_TipoGallo_TipoGalloId",
                table: "Familia");

            migrationBuilder.DropColumn(
                name: "Familiar",
                table: "Familia");

            migrationBuilder.RenameColumn(
                name: "TipoGalloId",
                table: "Familia",
                newName: "Id_TipoGallo");

            migrationBuilder.RenameIndex(
                name: "IX_Familia_TipoGalloId",
                table: "Familia",
                newName: "IX_Familia_Id_TipoGallo");

            migrationBuilder.AddForeignKey(
                name: "FK_Familia_TipoGallo_Id_TipoGallo",
                table: "Familia",
                column: "Id_TipoGallo",
                principalTable: "TipoGallo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
