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
        IEnumerable<EmpleadoViewModel> GetEmpleados();
        int AddEmpleado(Empleado model);
        int EditEmpleado(int idEmpleado, Empleado model);
        Empleado GetEmpleadoById(int idEmpleado);
        IEnumerable<Empleado> Search(DateTime desde, DateTime hasta);
        Empleado Loggin(string cedula);
    }
}
