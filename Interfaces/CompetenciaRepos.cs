using OpenSourceWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenSourceWeb.Data;
using Microsoft.EntityFrameworkCore;

namespace OpenSourceWeb.Interfaces
{
    public class CompetenciaRepos: ICompetencia
    {
        private readonly ApplicationDbContext _dbContext;
        public CompetenciaRepos(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task AddCompetencia(Competencias model)
        {

            _dbContext.Competencias.Add(model);
            await _dbContext.SaveChangesAsync();

        }

        public async Task EditCompetencia(int idCompetencia, Competencias model)
        {

            var comp = _dbContext.Competencias
                .SingleOrDefault(r => r.Id == idCompetencia);
            comp.Descripcion = model.Descripcion;
            comp.Estado = model.Estado;
            await _dbContext.SaveChangesAsync();

        }

        public async Task<Competencias> GetCompetenciaById(int idCompetencia)
        {
            return await _dbContext.Competencias
               .SingleAsync(r => r.Id == idCompetencia);
        }

        public async Task<IEnumerable<CompetenciaViewModel>> GetCompetencias()
        {

            var data = await _dbContext.Competencias
                .ToListAsync();
            List<CompetenciaViewModel> list = new List<CompetenciaViewModel>();
            foreach (var item in data)
            {
                list.Add(
                    new CompetenciaViewModel
                    {
                        Codigo = item.Id,
                        Descripcion = item.Descripcion,
                        Estado = item.Estado.Value ? "Activo" : "Inactivo"
                    }
                 );
            }
            return list;
        }
    }
}
