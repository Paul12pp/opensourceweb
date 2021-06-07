using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenSourceWeb.Models
{
    public class EmpleadoViewModel
    {
        
        public int Codigo { get; set; }
        public string Cedula { get; set; }
        public string Nombre { get; set; }
        [Display(Name = "Fecha de Ingreso")]
        public DateTime Fecha_Ing { get; set; }
        public string Departamento { get; set; }
        public string Puesto { get; set; }
        [Display(Name ="Salario Mensual")]
        public decimal Salario_M { get; set; }
        public string Estado { get; set; }

    }
}
