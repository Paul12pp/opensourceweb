using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenSourceWeb.Models
{
    public class CandidatoViewModel
    {
        public int Codigo { get; set; }
        public string Cedula { get; set; }
        public string Nombre { get; set; }
        public string Puesto { get; set; }
        public string Departamento { get; set; }
        public decimal Salario_Asp { get; set; }
        public string Competencias { get; set; }
        public string Recomendado_p { get; set; }
    }
}
