using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenSourceWeb.Models
{
    public class CapacitacionViewModel
    {
        public int Codigo { get; set; }
        public string Descripcion { get; set; }
        public string Nivel { get; set; }
        public DateTime Fecha_desde { get; set; }
        public DateTime Fecha_hasta { get; set; }
        public string Institucion { get; set; }
    }
}
