using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpenSourceWeb.Models.Dto
{
    public class SeachCandidatoInputDto
    {
        //string nombre, int puesto, string comp,
        //  decimal salarioD, decimal salarioH
        public string nombre { get; set; }
        public int puesto { get; set; }
        public string competencia { get; set; }
        public decimal salarioD { get; set; }
        public decimal salarioH { get; set; }
    }
}
