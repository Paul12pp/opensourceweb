using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OpenSourceWeb.Models;

namespace OpenSourceWeb.Interfaces
{
    public interface IEmpleado
    {
        Task<IEnumerable<EmpleadoViewModel>> GetEmpleados();
        Task AddEmpleado(Empleado model);
        Task EditEmpleado(int idEmpleado, Empleado model);
        Task<Empleado> GetEmpleadoById(int idEmpleado);
        Task<IEnumerable<Empleado>> Search(DateTime desde, DateTime hasta);
        //Empleado Loggin(string cedula);
    }
}
