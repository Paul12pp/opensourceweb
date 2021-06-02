using OpenSourceWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenSourceWeb.Interfaces
{
    public interface IIdioma
    {
        Task<IEnumerable<IdiomaViewModel>> GetIdiomas();
        Task AddIdioma(Idiomas model);
        Task EditIdioma(int idIdioma, Idiomas model);
        Task<Idiomas> GetIdiomaById(int idIdioma);
    }
}
