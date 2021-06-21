using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpenSourceWeb.Models.Dto
{
    public class CandidatoInputDto
    {
        public Candidatos Candidato { get; set; }
        public List<Experiencia> Experiencia { get; set; }
        public List<Capacitaciones> Capacitacion { get; set; }
    }
}
