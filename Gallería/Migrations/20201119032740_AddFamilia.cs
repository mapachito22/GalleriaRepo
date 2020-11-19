using Microsoft.EntityFrameworkCore.Migrations;

namespace Gallería.Migrations
{
    public partial class AddFamilia : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.CreateTable(
                name: "Familia",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Id_TipoGallo = table.Column<int>(type: "int", nullable: true),
                    Id_Gallo = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Familia", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Familia_Gallo_Id_Gallo",
                        column: x => x.Id_Gallo,
                        principalTable: "Gallo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Familia_TipoGallo_Id_TipoGallo",
                        column: x => x.Id_TipoGallo,
                        principalTable: "TipoGallo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Familia_Id_Gallo",
                table: "Familia",
                column: "Id_Gallo");

            migrationBuilder.CreateIndex(
                name: "IX_Familia_Id_TipoGallo",
                table: "Familia",
                column: "Id_TipoGallo");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Familia");

            migrationBuilder.AddColumn<int>(
                name: "Id_TipoGallo",
                table: "Gallo",
                type: "int",
                nullable: true);

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
                onDelete: ReferentialAction.Restrict);
        }
    }
}
