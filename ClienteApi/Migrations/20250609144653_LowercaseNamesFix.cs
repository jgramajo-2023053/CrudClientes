using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ClienteApi.Migrations
{
    /// <inheritdoc />
    public partial class LowercaseNamesFix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Clientes",
                table: "Clientes");

            migrationBuilder.RenameTable(
                name: "Clientes",
                newName: "clientes");

            migrationBuilder.RenameColumn(
                name: "Telefono",
                table: "clientes",
                newName: "telefono");

            migrationBuilder.RenameColumn(
                name: "Nombre",
                table: "clientes",
                newName: "nombre");

            migrationBuilder.RenameColumn(
                name: "Correo",
                table: "clientes",
                newName: "correo");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "clientes",
                newName: "id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_clientes",
                table: "clientes",
                column: "id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_clientes",
                table: "clientes");

            migrationBuilder.RenameTable(
                name: "clientes",
                newName: "Clientes");

            migrationBuilder.RenameColumn(
                name: "telefono",
                table: "Clientes",
                newName: "Telefono");

            migrationBuilder.RenameColumn(
                name: "nombre",
                table: "Clientes",
                newName: "Nombre");

            migrationBuilder.RenameColumn(
                name: "correo",
                table: "Clientes",
                newName: "Correo");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Clientes",
                newName: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Clientes",
                table: "Clientes",
                column: "Id");
        }
    }
}
