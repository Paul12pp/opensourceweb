using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OpenSourceWeb.Data;
using OpenSourceWeb.Models;

namespace OpenSourceWeb.Interfaces
{
    public class IdiomaRepos:IIdioma
    {

        private readonly ApplicationDbContext _dbContext;
        public IdiomaRepos(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task AddIdioma(Idiomas model)
        {

                _dbContext.Idiomas.Add(model);
               await  _dbContext.SaveChangesAsync();

        }

        public async Task EditIdioma(int idIdioma, Idiomas model)
        {

            var idioma = _dbContext.Idiomas
                .SingleOrDefault(r => r.Id == idIdioma);
            idioma.Nombre = model.Nombre;
            idioma.Estado = model.Estado;
            await _dbContext.SaveChangesAsync();

        }

        public async Task<Idiomas> GetIdiomaById(int idIdioma)
        {
            return await _dbContext.Idiomas
                .SingleAsync(r => r.Id == idIdioma);
        }

        public async Task<IEnumerable<IdiomaViewModel>> GetIdiomas()
        {
            var data = await _dbContext.Idiomas
                .ToListAsync();
            List <IdiomaViewModel> list = new List<IdiomaViewModel>();
            foreach (var item in data)
            {
                list.Add(
                    new IdiomaViewModel
                    {
                        Codigo=item.Id,
                        Nombre=item.Nombre,
                        Estado= item.Estado.Value ? "Activo":"Inactivo"
                    }
                 );
            }
            return list;
        }
    }
}
