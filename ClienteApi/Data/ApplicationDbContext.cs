using Microsoft.EntityFrameworkCore;
using ClienteApi.Models;

namespace ClienteApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Cliente> Clientes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Convertir nombres de tablas y columnas a minúsculas para evitar problemas con PostgreSQL
            foreach (var entity in modelBuilder.Model.GetEntityTypes())
            {
                // Tabla en minúsculas
                entity.SetTableName(entity.GetTableName().ToLower());

                // Columnas en minúsculas
                foreach (var property in entity.GetProperties())
                {
                    property.SetColumnName(property.GetColumnName().ToLower());
                }
            }
        }
    }
}