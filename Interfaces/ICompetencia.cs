using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenSourceWeb.Models;

namespace OpenSourceWeb.Interfaces
{
    public interface ICompetencia
    {
        Task<IEnumerable<CompetenciaViewModel>> GetCompetencias();
        Task<IEnumerable<CompetenciaViewModel>> GetCompetenciasA();
        Task AddCompetencia(Competencias model);
        Task EditCompetencia(int idCompetencia, Competencias model);
        Task<Competencias> GetCompetenciaById(int idCompetencia);
    }
}
