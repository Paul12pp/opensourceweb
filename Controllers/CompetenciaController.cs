using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OpenSourceWeb.Interfaces;
using OpenSourceWeb.Models;

namespace OpenSourceWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompetenciaController : ControllerBase
    {
        private readonly ICompetencia _services;
        public CompetenciaController(ICompetencia services)
        {
            _services = services;
        }
        
        [HttpGet("get")]
        public async Task<IEnumerable<CompetenciaViewModel>> GetCompetencias()
        {
            return await _services.GetCompetencias();
        }
        [HttpGet("getactive")]
        public async Task<IEnumerable<CompetenciaViewModel>> GetCompetenciasA()
        {
            return await _services.GetCompetenciasA();
        }

        [HttpGet("get/{id}")]
        public async Task<Competencias> GetCompetencia(int id)
        {
            return await _services.GetCompetenciaById(id);
        }

        [HttpPost("post")]
        public async Task<IActionResult> PostComptencia(Competencias model)
        {
            if (ModelState.IsValid)
            {
                await _services.AddCompetencia(model);
                return Ok();
            }
            return BadRequest("Erorr");
        }
        [HttpPost("edit/{id}")]
        public async Task<IActionResult> EditCompetencia(int id, Competencias model)
        {
            if (ModelState.IsValid)
            {
                await _services.EditCompetencia(id, model);
                return Ok();
            }
            return BadRequest("Erorr");
        }
    }
}
