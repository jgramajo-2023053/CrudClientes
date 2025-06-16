# Etapa de compilación
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

COPY . . 
RUN dotnet publish -c Release -o out

# Etapa de runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/out .

# EXPONER puerto (puedes omitir esto en Render, pero ayuda en pruebas locales)
EXPOSE 5000

ENTRYPOINT ["dotnet", "ClienteApi.dll"]