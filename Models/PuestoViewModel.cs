using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenSourceWeb.Models
{
    public class PuestoViewModel
    {
        public int Codigo { get; set; }
        public string Nombre { get; set; }
        public string Nivel_Riesgo { get; set; }
        public decimal Nivel_Mi_Salarial { get; set; }
        public decimal Nivel_Ma_Salarial { get; set; }
        public string Estado { get; set; }
    }
}
