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
    public class EmpleadoController : ControllerBase
    {
        private readonly IEmpleado _services;
        public EmpleadoController(IEmpleado services)
        {
            _services = services;
        }
        [HttpGet("get")]
        public async Task<IEnumerable<EmpleadoViewModel>> GetEmpleados()
        {
            return await _services.GetEmpleados();
        }

        [HttpGet("get/{id}")]
        public async Task<Empleado> GetEmpleado(int id)
        {
            return await _services.GetEmpleadoById(id);
        }

        [HttpPost("post")]
        public async Task<IActionResult> PostEmpleado(Empleado model)
        {
            if (ModelState.IsValid)
            {
                await _services.AddEmpleado(model);
                return Ok();
            }
            return BadRequest("Erorr");
        }
        [HttpPost("edit/{id}")]
        public async Task<IActionResult> EditEmpleado(int id, Empleado model)
        {
            if (ModelState.IsValid)
            {
                await _services.EditEmpleado(id, model);
                return Ok();
            }
            return BadRequest("Erorr");
        }
        [HttpGet("search")]
        public async Task<IEnumerable<Empleado>> Search(DateTime desde, DateTime hasta)
        {
            return await _services.Search(desde,hasta);
        }
    }
}
