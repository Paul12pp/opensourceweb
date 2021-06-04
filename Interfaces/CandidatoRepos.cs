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
    public  class CandidatoRepos : ICandidato
    {
        private readonly ApplicationDbContext _dbContext;
        public  CandidatoRepos(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async  Task<Candidatos> AddCandidato(Candidatos model)
        {

                model.Estado = "Pendiente";
                _dbContext.Candidatos.Add(model);
                await _dbContext.SaveChangesAsync();
                return model;
        }

        public async Task AddCapacitaciones(CapacitacionInputDto model)
        {

                _dbContext.Capacitaciones.AddRange(model.capacitaciones);
                var cand = _dbContext.Candidatos
                    .SingleOrDefault(r => r.Id == model.Id);
                cand.Competencias = model.Competencias;
                await _dbContext.SaveChangesAsync();

        }

        public async Task AddExperiencia(List<Experiencia> model)
        {

                _dbContext.Experiencia.AddRange(model);
               await _dbContext.SaveChangesAsync();
        }

        public async Task AprobarCandidato(EstadoInputDto model)
        {

                var cand = _dbContext.Candidatos
                    .SingleOrDefault(r => r.Id == model.Id);
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
                await _dbContext.SaveChangesAsync();

        }

        public async Task DeleteCandidato(int id)
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
                    await _dbContext.SaveChangesAsync();
                }

        }
        public async Task EditCandidato(int id, Candidatos model)
        {
                var cand = _dbContext.Candidatos
                    .SingleOrDefault(r => r.Id == id);
                cand.Nombre = model.Nombre;
                cand.IdPuesto = model.IdPuesto;
                cand.IdDepartamento = model.IdDepartamento;
                cand.Recomendado_p = model.Recomendado_p;
                cand.Salario_Asp = model.Salario_Asp;
                await _dbContext.SaveChangesAsync();

        }

        public async Task<Candidatos> GetCandidatoByCedula(string cedula)
        {
            var cand = await _dbContext.Candidatos
                .SingleOrDefaultAsync(r => r.Cedula == cedula);
            return cand != null ? cand : new Candidatos();
        }

        public async Task<Candidatos> GetCandidatoById(int id)
        {
            return await _dbContext.Candidatos
                .SingleOrDefaultAsync(r => r.Id == id);
        }

        public async Task<IEnumerable<CandidatoViewModel>> GetCandidatos()
        {
            var data =await _dbContext.Candidatos.
                Where(r=>r.Estado=="Pendiente")
                .ToListAsync();
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

        public async Task<IEnumerable<CandidatoViewModel>> GetCandidatosByPuestos(int idPuesto)
        {
            var data =await _dbContext.Candidatos
                .Where(r => r.IdPuesto == idPuesto)
               .ToListAsync();
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

        public async Task<IEnumerable<CapacitacionViewModel>> GetCapacitacionByCandidato(int id)
        {
            var data =await _dbContext.Capacitaciones
                .Where(r => r.IdCandidato == id)
                .ToListAsync();
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

        public async Task<IEnumerable<ExperienciaViewModel>> GetExperienciasByCandidato(int id)
        {
            var data = await _dbContext.Experiencia
                .Where(r => r.IdCandidato == id)
                .ToListAsync();
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

        public async Task RechazarCandidato(EstadoInputDto model)
        {

                var cand = _dbContext.Candidatos
                    .SingleOrDefault(r => r.Id == model.Id);
                cand.Estado = "Rechazado";
                await _dbContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<CandidatoViewModel>> Search(string nombre, int puesto, string comp, 
            decimal salarioD, decimal salarioH)
        {
           var data = await _dbContext.Candidatos
                .Where(r => r.Nombre.Contains(nombre) && r.IdPuesto == puesto
                && r.Competencias.Contains(comp))
                .ToListAsync();
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
