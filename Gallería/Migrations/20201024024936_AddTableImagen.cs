using Microsoft.EntityFrameworkCore.Migrations;

namespace Gallería.Migrations
{
    public partial class AddTableImagen : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Imagen",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Id_Gallo = table.Column<int>(type: "int", nullable: false),
                    ruta = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Imagen", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Imagen_Gallo_Id_Gallo",
                        column: x => x.Id_Gallo,
                        principalTable: "Gallo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Imagen_Id_Gallo",
                table: "Imagen",
                column: "Id_Gallo");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Imagen");
        }
    }
}
