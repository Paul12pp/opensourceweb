using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenSourceWeb.Data;
using OpenSourceWeb.Models;

namespace OpenSourceWeb.Interfaces
{
    public class EmpleadoRepos:IEmpleado
    {
        private readonly ApplicationDbContext _dbContext;
        public EmpleadoRepos(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public int AddEmpleado(Empleado model)
        {
            try
            {
                _dbContext.Empleado.Add(model);
                _dbContext.SaveChanges();
                return 200;
            }
            catch (Exception)
            {
                return 500;
            }
        }

        public int EditEmpleado(int idEmpleado, Empleado model)
        {
            try
            {
                var empleado = _dbContext.Empleado
                    .SingleOrDefault(r => r.Id == idEmpleado);
                empleado.Nombre = model.Nombre;
                empleado.Cedula = model.Cedula;
                empleado.Puesto = model.Puesto;
                empleado.IdDepartamento = model.IdDepartamento;
                empleado.Salario_M = model.Salario_M;
                empleado.Estado = model.Estado;
                _dbContext.SaveChanges();
                return 200;
            }
            catch (Exception)
            {
                return 500;
            }
        }

        public Empleado GetEmpleadoById(int idEmpleado)
        {
            return _dbContext.Empleado
                .SingleOrDefault(r => r.Id == idEmpleado);
        }

        public IEnumerable<EmpleadoViewModel> GetEmpleados()
        {
            var data = _dbContext.Empleado
                .ToList();
            List<EmpleadoViewModel> list = new List<EmpleadoViewModel>();
            foreach (var item in data)
            {
                list.Add(
                    new EmpleadoViewModel
                    {
                        Codigo = item.Id,
                        Nombre = item.Nombre,
                        Departamento= data.SingleOrDefault(r=>r.Id==item.Id).Departamento.Descripcion,
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

        public IEnumerable<Empleado> Search(DateTime desde, DateTime hasta)
        {
            var data = _dbContext.Empleado
                .Where(r => r.Fecha_Ing >= desde && r.Fecha_Ing <= hasta)
                .ToList();
            return data;
        }
    }
}
