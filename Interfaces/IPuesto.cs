using OpenSourceWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenSourceWeb.Interfaces
{
    public interface IPuesto
    {
        Task<IEnumerable<PuestoViewModel>> GetPuestos();
        Task<IEnumerable<PuestoViewModel>> GetPuestosA();
        Task<IEnumerable<PuestoViewModel>> GetPuestosByDpt(int dpt);
        Task<IEnumerable<Departamento>> GetDepartamentos();
        Task AddPuesto(Puestos model);
        Task EditPuesto(int idPuesto, Puestos model);
        Task<Puestos> GetPuestosById(int idPuesto);
    }
}
