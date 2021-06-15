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
    public class PuestosRepos:IPuesto
    {
        private readonly ApplicationDbContext _dbContext;
        public PuestosRepos(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task AddPuesto(Puestos model)
        {

                _dbContext.Puestos.Add(model);
                await _dbContext.SaveChangesAsync();

        }

        public async Task EditPuesto(int idPuesto, Puestos model)
        {

                var puesto = _dbContext.Puestos
                    .SingleOrDefault(r => r.Id == idPuesto);
                puesto.Nombre = model.Nombre;
                puesto.Nivel_Riesgo = model.Nivel_Riesgo;
                puesto.Nivel_Ma_Salarial = model.Nivel_Ma_Salarial;
                puesto.Nivel_Mi_Salarial = model.Nivel_Mi_Salarial;
                puesto.Estado = model.Estado;
            puesto.DepartamentoId = model.DepartamentoId;
                await _dbContext.SaveChangesAsync();

        }

        public async Task <IEnumerable<Departamento>> GetDepartamentos()
        {
            return await _dbContext.Departamento
                .ToListAsync();
        }

        public async Task<IEnumerable<PuestoViewModel>> GetPuestos()
        {

            var data =await _dbContext.Puestos
                .ToListAsync();
            List<PuestoViewModel> list = new List<PuestoViewModel>();
            foreach (var item in data)
            {
                list.Add(
                    new PuestoViewModel
                    {
                        Codigo = item.Id,
                        Nombre = item.Nombre,
                        Nivel_Ma_Salarial = item.Nivel_Ma_Salarial.Value,
                        Nivel_Mi_Salarial = item.Nivel_Mi_Salarial.Value,
                        Nivel_Riesgo = item.Nivel_Riesgo,
                        Estado = item.Estado.Value ? "Activo" : "Inactivo"
                    }
                 );
            }
            return list;
        }

        public async Task<Puestos> GetPuestosById(int idPuesto)
        {
            return await _dbContext.Puestos
                .SingleOrDefaultAsync(r => r.Id == idPuesto);
        }
    }
}
