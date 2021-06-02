using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using OpenSourceWeb.Models;

namespace OpenSourceWeb.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }
        public DbSet<Candidatos> Candidatos { get; set; }
        public DbSet<Capacitaciones> Capacitaciones { get; set; }
        public DbSet<Competencias> Competencias { get; set; }
        public DbSet<Departamento> Departamento { get; set; }
        public DbSet<Empleado> Empleado { get; set; }
        public DbSet<Experiencia> Experiencia { get; set; }
        public DbSet<Idiomas> Idiomas { get; set; }
        public DbSet<Puestos> Puestos { get; set; }
    }
}
