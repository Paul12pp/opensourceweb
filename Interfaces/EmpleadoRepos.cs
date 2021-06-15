using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using OpenSourceWeb.Data;
using OpenSourceWeb.Models;
using OpenSourceWeb.Models.Dto;

namespace OpenSourceWeb.Interfaces
{
    public class EmpleadoRepos:IEmpleado
    {
        private readonly ApplicationDbContext _dbContext;
        public EmpleadoRepos(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task AddEmpleado(Empleado model)
        {

                _dbContext.Empleado.Add(model);
                await _dbContext.SaveChangesAsync();
        }

        public async Task EditEmpleado(int idEmpleado, Empleado model)
        {

                var empleado = _dbContext.Empleado
                    .SingleOrDefault(r => r.Id == idEmpleado);
                empleado.Nombre = model.Nombre;
                empleado.Cedula = model.Cedula;
                empleado.Puesto = model.Puesto;
                empleado.DepartamentoId = model.DepartamentoId;
                empleado.Salario_M = model.Salario_M;
                empleado.Estado = model.Estado;
                await _dbContext.SaveChangesAsync();
        }

        public async Task<Empleado> GetEmpleadoById(int idEmpleado)
        {
            return await _dbContext.Empleado
                .SingleOrDefaultAsync(r => r.Id == idEmpleado);
        }

        public async Task<IEnumerable<EmpleadoViewModel>> GetEmpleados()
        {
            var data = await _dbContext.Empleado
                .ToListAsync();
            List<EmpleadoViewModel> list = new List<EmpleadoViewModel>();
            foreach (var item in data)
            {
                var desc = data.SingleOrDefault(r => r.Id == item.DepartamentoId).Departamento.Descripcion;
                list.Add(
                    new EmpleadoViewModel
                    {
                        Codigo = item.Id,
                        Nombre = item.Nombre,
                        Departamento= desc,
                        Cedula=item.Cedula,
                        Fecha_Ing=item.Fecha_Ing.Value,
                        Puesto=item.Puesto,
                        Salario_M=item.Salario_M.Value,
                        Estado = item.Estado.Value ? "Activo" : "Inactivo"
                    }
                 );
            }
            return list;
        }

        public Empleado Loggin(string cedula)
        {
            var emp = _dbContext.Empleado
                .SingleOrDefault(r => r.Cedula == cedula);
            if (emp != null)
                return emp;
            else
                return new Empleado();
        }

        public async Task<IEnumerable<Empleado>> Search(DateTime desde, DateTime hasta)
        {
            var data = await _dbContext.Empleado
                .Where(r => r.Fecha_Ing >= desde && r.Fecha_Ing <= hasta)
                .ToListAsync();
            return data;
        }
    }
}
