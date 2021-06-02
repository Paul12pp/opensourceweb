using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenSourceWeb.Data;
using OpenSourceWeb.Models;

namespace OpenSourceWeb.Interfaces
{
    public class CandidatoRepos : ICandidato
    {
        private readonly ApplicationDbContext _dbContext;
        public CandidatoRepos(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public Candidatos AddCandidato(Candidatos model)
        {
            try
            {
                model.Estado = "Pendiente";
                _dbContext.Candidatos.Add(model);
                _dbContext.SaveChanges();
                return model;
            }
            catch (Exception)
            {
                return new Candidatos();
            }
        }

        public int AddCapacitaciones(int id, List<Capacitaciones> model, 
            string competencias)
        {
            try
            {
                _dbContext.Capacitaciones.AddRange(model);
                var cand = _dbContext.Candidatos
                    .SingleOrDefault(r => r.Id == id);
                cand.Competencias = competencias;
                _dbContext.SaveChanges();
                return 200;
            }
            catch (Exception)
            {
                return 500;
            }
        }

        public int AddExperiencia(List<Experiencia> model)
        {
            try
            {
                _dbContext.Experiencia.AddRange(model);
                _dbContext.SaveChanges();
                return 200;
            }
            catch (Exception)
            {
                return 500;
            }
        }

        public int AprobarCandidato(int idcandidato)
        {
            try
            {
                var cand = _dbContext.Candidatos
                    .SingleOrDefault(r => r.Id == idcandidato);
                cand.Estado = "Aprobado";
                var emp = new Empleado
                {
                    Cedula = cand.Cedula,
                    Nombre = cand.Nombre,
                    Estado = true,
                    Fecha_Ing = DateTime.Now,
                    Salario_M = cand.Salario_Asp,
                    IdDepartamento = cand.IdDepartamento,
                    Puesto = cand.Puestos.Nombre
                };
                _dbContext.Empleado.Add(emp);
                _dbContext.SaveChanges();
                return 200;
            }
            catch (Exception)
            {
                return 500;
            }
        }

        public int DeleteCandidato(int id)
        {
            try
            {
                var cand = _dbContext.Candidatos
                    .SingleOrDefault(r => r.Id == id);
                if (cand != null)
                {
                    var cap = _dbContext.Capacitaciones
                        .Where(r => r.IdCandidato == id);
                    _dbContext.Capacitaciones.RemoveRange(cap);
                    var exp = _dbContext.Experiencia.
                        Where(r => r.IdCandidato == id);
                    _dbContext.Experiencia.RemoveRange(exp);
                    _dbContext.SaveChanges();
                    return 200;
                }
                else
                {
                    return 500;
                }
            }
            catch (Exception)
            {
                return 500;
            }
        }

        public int EditCandidato(int id, Candidatos model)
        {
            try
            {
                var cand = _dbContext.Candidatos
                    .SingleOrDefault(r => r.Id == id);
                cand.Nombre = model.Nombre;
                cand.IdPuesto = model.IdPuesto;
                cand.IdDepartamento = model.IdDepartamento;
                cand.Recomendado_p = model.Recomendado_p;
                cand.Salario_Asp = model.Salario_Asp;
                _dbContext.SaveChanges();
                return 200;
            }
            catch (Exception)
            {
                return 500;
            }
        }

        public Candidatos GetCandidatoByCedula(string cedula)
        {
            var cand = _dbContext.Candidatos
                .SingleOrDefault(r => r.Cedula == cedula);
            return cand != null ? cand : new Candidatos();
        }

        public Candidatos GetCandidatoById(int id)
        {
            return _dbContext.Candidatos
                .SingleOrDefault(r => r.Id == id);
        }

        public IEnumerable<CandidatoViewModel> GetCandidatos()
        {
            var data = _dbContext.Candidatos.
                Where(r=>r.Estado=="Pendiente")
                .ToList();
            List<CandidatoViewModel> list = new List<CandidatoViewModel>();
            foreach (var item in data)
            {
                list.Add(
                    new CandidatoViewModel
                    {
                        Codigo = item.Id,
                        Nombre = item.Nombre,
                        Cedula = item.Cedula,
                        Departamento = item.Departamento.Descripcion,
                        Competencias = item.Competencias,
                        Puesto = item.Puestos.Nombre,
                        Salario_Asp = item.Salario_Asp.Value,
                        Recomendado_p = item.Recomendado_p
                    }
                 );
            }
            return list;
        }

        public IEnumerable<CandidatoViewModel> GetCandidatosByPuestos(int idPuesto)
        {
            var data = _dbContext.Candidatos
                .Where(r => r.IdPuesto == idPuesto)
               .ToList();
            List<CandidatoViewModel> list = new List<CandidatoViewModel>();
            foreach (var item in data)
            {
                list.Add(
                    new CandidatoViewModel
                    {
                        Codigo = item.Id,
                        Nombre = item.Nombre,
                        Cedula = item.Cedula,
                        Departamento = item.Departamento.Descripcion,
                        Competencias = item.Competencias,
                        Puesto = item.Puestos.Nombre,
                        Salario_Asp = item.Salario_Asp.Value,
                        Recomendado_p = item.Recomendado_p
                    }
                 );
            }
            return list;
        }

        public IEnumerable<CapacitacionViewModel> GetCapacitacionByCandidato(int id)
        {
            var data = _dbContext.Capacitaciones
                .Where(r => r.IdCandidato == id)
                .ToList();
            List<CapacitacionViewModel> list = new List<CapacitacionViewModel>();
            foreach (var item in data)
            {
                list.Add(new CapacitacionViewModel
                {
                    Codigo = item.Id,
                    Descripcion = item.Descripcion,
                    Fecha_desde = item.Fecha_desde.Value,
                    Fecha_hasta = item.Fecha_hasta.Value,
                    Institucion = item.Institucion,
                    Nivel = item.Nivel
                });
            }
            return list;
        }

        public IEnumerable<ExperienciaViewModel> GetExperienciasByCandidato(int id)
        {
            var data = _dbContext.Experiencia
                .Where(r => r.IdCandidato == id)
                .ToList();
            List<ExperienciaViewModel> list = new List<ExperienciaViewModel>();
            foreach (var item in data)
            {
                list.Add(new ExperienciaViewModel
                {
                    Codigo = item.Id,
                    Empresa = item.Empresa,
                    Fecha_desde = item.Fecha_desde.Value,
                    Fecha_hasta = item.Fecha_hasta.Value,
                    Puesto = item.Puesto,
                    Salario = item.Salario.Value
                });
            }
            return list;
        }

        public int RechazarCandidato(int idcandidato)
        {
            try
            {
                var cand = _dbContext.Candidatos
                    .SingleOrDefault(r => r.Id == idcandidato);
                cand.Estado = "Rechazado";
                _dbContext.SaveChanges();
                return 200;
            }
            catch (Exception)
            {
                return 500;
            }
        }

        public IEnumerable<CandidatoViewModel> Search(string nombre, int puesto, string comp, 
            decimal salarioD, decimal salarioH)
        {
           var data = _dbContext.Candidatos
                .Where(r => r.Nombre.Contains(nombre) && r.IdPuesto == puesto
                && r.Competencias.Contains(comp))
                .ToList();
            if (salarioD > 0)
                data.Where(r => r.Salario_Asp > salarioD && r.Salario_Asp < salarioH)
                    .ToList();
            List<CandidatoViewModel> list = new List<CandidatoViewModel>();
            foreach (var item in data)
            {
                list.Add(
                    new CandidatoViewModel
                    {
                        Codigo = item.Id,
                        Nombre = item.Nombre,
                        Cedula = item.Cedula,
                        Departamento = item.Departamento.Descripcion,
                        Competencias = item.Competencias,
                        Puesto = item.Puestos.Nombre,
                        Salario_Asp = item.Salario_Asp.Value,
                        Recomendado_p = item.Recomendado_p
                    }
                 );
            }
            return list;
        }
    }
}
