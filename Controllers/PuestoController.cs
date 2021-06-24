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
    public class PuestoController : ControllerBase
    {
        private readonly IPuesto _services;
        public PuestoController(IPuesto services)
        {
            _services = services;
        }
        [HttpGet("get")]
        public async Task<IEnumerable<PuestoViewModel>> GetPuestos()
        {
            return await _services.GetPuestos();
        }
        [HttpGet("getactive")]
        public async Task<IEnumerable<PuestoViewModel>> GetPuestosA()
        {
            return await _services.GetPuestosA();
        }
        [HttpGet("getbydpt/{id}")]
        public async Task<IEnumerable<PuestoViewModel>> GetPuestosByDpt(int id)
        {
            return await _services.GetPuestosByDpt(id);
        }

        [HttpGet("get/{id}")]
        public async Task<Puestos> GetPuesto(int id)
        {
            return await _services.GetPuestosById(id);
        }

        [HttpGet("getdpt")]
        public async Task<IEnumerable<Departamento>> GetDepartamento()
        {
            return await _services.GetDepartamentos();
        }

        [HttpPost("post")]
        public async Task<IActionResult> PostPuesto(Puestos model)
        {
            if (ModelState.IsValid)
            {
                await _services.AddPuesto(model);
                return Ok();
            }
            return BadRequest("Erorr");
        }
        [HttpPost("edit/{id}")]
        public async Task<IActionResult> EditPuesto(int id, Puestos model)
        {
            if (ModelState.IsValid)
            {
                await _services.EditPuesto(id, model);
                return Ok();
            }
            return BadRequest("Erorr");
        }
    }
}
