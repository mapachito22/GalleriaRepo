using Microsoft.EntityFrameworkCore.Migrations;

namespace Gallería.Migrations
{
    public partial class addTipoGalloAgain : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Id_TipoGallo",
                table: "Gallo",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Gallo_Id_TipoGallo",
                table: "Gallo",
                column: "Id_TipoGallo");

            migrationBuilder.AddForeignKey(
                name: "FK_Gallo_TipoGallo_Id_TipoGallo",
                table: "Gallo",
                column: "Id_TipoGallo",
                principalTable: "TipoGallo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Gallo_TipoGallo_Id_TipoGallo",
                table: "Gallo");

            migrationBuilder.DropIndex(
                name: "IX_Gallo_Id_TipoGallo",
                table: "Gallo");

            migrationBuilder.DropColumn(
                name: "Id_TipoGallo",
                table: "Gallo");
        }
    }
}
