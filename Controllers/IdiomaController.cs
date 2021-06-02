using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OpenSourceWeb.Interfaces;
using OpenSourceWeb.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace OpenSourceWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IdiomaController : ControllerBase
    {
        private readonly IIdioma _services;
        public IdiomaController(IIdioma services)
        {
            _services = services;
        }
        [HttpGet("get")]
        public async Task<IEnumerable<IdiomaViewModel>> GetIdiomas()
        {
            return await _services.GetIdiomas();
        }

        [HttpGet("get/{id}")]
        public async Task<Idiomas> GetIdioma(int id)
        {
            return await _services.GetIdiomaById(id);
        }

        [HttpPost("post")]
        public async Task<IActionResult> PostIdioma(Idiomas model)
        {
            if (ModelState.IsValid)
            {
                await _services.AddIdioma(model);
                return Ok();
            }
            return BadRequest("Erorr");
        }
        [HttpPost("edit/{id}")]
        public async Task<IActionResult> EditIdioma(int id, Idiomas model)
        {
            if (ModelState.IsValid)
            {
                await _services.EditIdioma(id, model);
                return Ok();
            }
            return BadRequest("Erorr");
        }
    }
}
