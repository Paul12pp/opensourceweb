using OpenSourceWeb.Models;
using OpenSourceWeb.Models.Dto;
using OpenSourceWeb.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenSourceWeb.Interfaces
{
    public interface ICandidato
    {
        Task<IEnumerable<CandidatoViewModel>> GetCandidatos();
        Task<Candidatos> GetCandidatoById(int id);
        Task<IEnumerable<CandidatoViewModel>> GetCandidatosByPuestos(int idPuesto);
        Task<Candidatos> GetCandidatoByCedula(string cedula);
        Task<Candidatos> AddCandidato(CandidatoInputDto model);
        Task EditCandidato(int id, Candidatos model);
        Task AddExperiencia(List<Experiencia> model);
        Task<IEnumerable<ExperienciaViewModel>> GetExperienciasByCandidato(int id);
        Task<IEnumerable<CapacitacionViewModel>> GetCapacitacionByCandidato(int id);
        Task AddCapacitaciones(CapacitacionInputDto model);
        Task DeleteCandidato(int id);
        Task<IEnumerable<CandidatoViewModel>> Search(SeachCandidatoInputDto model);
        Task AprobarCandidato(EstadoInputDto model);
        Task RechazarCandidato(EstadoInputDto model);
        Task<DashboardViewModel> GetDashboard();
    }
}
