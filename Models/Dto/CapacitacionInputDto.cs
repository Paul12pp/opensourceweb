using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpenSourceWeb.Models.Dto
{
    public class CapacitacionInputDto
    {
        public int Id { get; set; }
        public List<Capacitaciones> capacitaciones { get; set; }
        public string Competencias { get; set; }
    }
}
