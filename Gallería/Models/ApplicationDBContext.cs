﻿using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;


namespace Gallería.Models
{
    public class ApplicationDBContext : IdentityDbContext<Usuario>
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options)
            : base(options)
        {

        }

        public DbSet<Gallo> Gallos { get; set; }
        public DbSet<Imagen> Imagens { get; set; }
        public DbSet<TipoGallo> TipoGallos { get; set; }
        public DbSet<Familia> Familias { get; set; }
        public DbSet<Prefijo> Prefijos { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
    }
}
