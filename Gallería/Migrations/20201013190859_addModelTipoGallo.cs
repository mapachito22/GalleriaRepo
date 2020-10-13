using Microsoft.EntityFrameworkCore.Migrations;

namespace Gallería.Migrations
{
    public partial class addModelTipoGallo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Id_TipoGallo",
                table: "Gallo",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "TipoGallo",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Descripcion = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TipoGallo", x => x.Id);
                });

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

            migrationBuilder.DropTable(
                name: "TipoGallo");

            migrationBuilder.DropIndex(
                name: "IX_Gallo_Id_TipoGallo",
                table: "Gallo");

            migrationBuilder.DropColumn(
                name: "Id_TipoGallo",
                table: "Gallo");
        }
    }
}
