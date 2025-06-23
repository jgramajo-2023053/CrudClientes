using Microsoft.EntityFrameworkCore;
using ClienteApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Obtener el puerto desde la variable de entorno PORT (usado en Render)
var port = Environment.GetEnvironmentVariable("PORT") ?? "5000";
builder.WebHost.UseUrls($"http://*:{port}");

// Configurar CORS para permitir todo (ajustable según producción)
builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirTodo", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Configurar cadena de conexión (desde appsettings o variable de entorno)
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(connectionString));

// Servicios adicionales
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Usar Swagger siempre (puedes limitar a solo desarrollo si quieres)
app.UseSwagger();
app.UseSwaggerUI();

// Activar CORS
app.UseCors("PermitirTodo");

// Redirección HTTPS (Render suele usar HTTP, así que puede no hacer falta)
app.UseHttpsRedirection();

app.UseAuthorization();
app.MapControllers();

// Aplicar migraciones automáticamente al iniciar
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    try
    {
        var db = services.GetRequiredService<ApplicationDbContext>();
        db.Database.Migrate();
        Console.WriteLine("✅ Migraciones aplicadas correctamente.");
    }
    catch (Exception ex)
    {
        Console.WriteLine("❌ Error al aplicar migraciones:");
        Console.WriteLine(ex.Message);
    }
}

app.Run();
