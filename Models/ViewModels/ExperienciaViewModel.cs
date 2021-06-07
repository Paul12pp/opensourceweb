using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenSourceWeb.Models
{
    public class ExperienciaViewModel
    {
        public int Codigo { get; set; }
        public string Empresa { get; set; }
        public string Puesto { get; set; }
        public DateTime Fecha_desde { get; set; }
        public DateTime Fecha_hasta { get; set; }
        public decimal Salario { get; set; }
    }
}
