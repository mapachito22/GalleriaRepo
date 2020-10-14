using Microsoft.EntityFrameworkCore.Migrations;

namespace Gallería.Migrations
{
    public partial class addNullableIdTipoGallo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Gallo_TipoGallo_Id_TipoGallo",
                table: "Gallo");

            migrationBuilder.AlterColumn<int>(
                name: "Id_TipoGallo",
                table: "Gallo",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Gallo_TipoGallo_Id_TipoGallo",
                table: "Gallo",
                column: "Id_TipoGallo",
                principalTable: "TipoGallo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Gallo_TipoGallo_Id_TipoGallo",
                table: "Gallo");

            migrationBuilder.AlterColumn<int>(
                name: "Id_TipoGallo",
                table: "Gallo",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Gallo_TipoGallo_Id_TipoGallo",
                table: "Gallo",
                column: "Id_TipoGallo",
                principalTable: "TipoGallo",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
