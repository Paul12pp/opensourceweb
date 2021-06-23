using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OpenSourceWeb.Interfaces;
using OpenSourceWeb.Models;
using OpenSourceWeb.Models.Dto;
using OpenSourceWeb.Models.ViewModels;

namespace OpenSourceWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidatoController : ControllerBase
    {
        private readonly ICandidato _services;
        public CandidatoController(ICandidato services)
        {
            _services = services;
        }
        [HttpGet("get")]
        public async Task<IEnumerable<CandidatoViewModel>> GetCandidatos()
        {
            return await _services.GetCandidatos();
        }

        [HttpGet("get/{id}")]
        public async Task<Candidatos> GetCandidato(int id)
        {
            return await _services.GetCandidatoById(id);
        }
        [HttpGet("getbypuestos/{id}")]
        public async Task<IEnumerable<CandidatoViewModel>> GetCandidatosByPuestos(int id)
        {
            return await _services.GetCandidatosByPuestos(id);
        }
        [HttpGet("getbycedula/{id}")]
        public async Task<Candidatos> GetCandidatoByCedula(string id)
        {
            return await _services.GetCandidatoByCedula(id);
        }
        [HttpGet("getdashboard")]
        public async Task<DashboardViewModel> GetDashboard()
        {
            return await _services.GetDashboard();
        }
        [HttpPost("post")]
        public async Task<IActionResult> PostCandidato(CandidatoInputDto model)
        {
            if (ModelState.IsValid)
            {
                await _services.AddCandidato(model);
                return Ok();
            }
            return BadRequest("Erorr");
        }
        [HttpPost("edit/{id}")]
        public async Task<IActionResult> EditCandidato(int id, Candidatos model)
        {
            if (ModelState.IsValid)
            {
                await _services.EditCandidato(id, model);
                return Ok();
            }
            return BadRequest("Erorr");
        }
        [HttpPost("postexp")]
        public async Task<IActionResult> AddExperiencia(List<Experiencia> model)
        {
            if (ModelState.IsValid)
            {
                await _services.AddExperiencia(model);
                return Ok();
            }
            return BadRequest("Erorr");
        }
        [HttpPost("postcap")]
        public async Task<IActionResult> AddCapacitaciones(CapacitacionInputDto model)
        {
            if (ModelState.IsValid)
            {
                await _services.AddCapacitaciones(model);
                return Ok();
            }
            return BadRequest("Erorr");
        }
        [HttpGet("getexpbycandidato/{id}")]
        public async Task<IEnumerable<ExperienciaViewModel>> GetExperienciasByCandidato(int id)
        {
            return await _services.GetExperienciasByCandidato(id);
        }
        [HttpGet("getcapbycandidato/{id}")]
        public async Task<IEnumerable<CapacitacionViewModel>> GetCapacitacionByCandidato(int id)
        {
            return await _services.GetCapacitacionByCandidato(id);
        }
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteCandidato(int id)
        {
            try
            {
                await _services.DeleteCandidato(id);
                return Ok();
            }
            catch (Exception)
            {

                return BadRequest();
            }

        }
        [HttpPost("aprobar/{id}")]
        public async Task<IActionResult> AprobarCandidato(EstadoInputDto model)
        {
            try
            {
                await _services.AprobarCandidato(model);
                return Ok();
            }
            catch (Exception)
            {

                return BadRequest();
            }

        }
        [HttpPost("rechazar/{id}")]
        public async Task<IActionResult> RechazarCandidato(EstadoInputDto model)
        {
            try
            {
                await _services.RechazarCandidato(model);
                return Ok();
            }
            catch (Exception)
            {

                return BadRequest();
            }

        }
        [HttpPost("search")]
        public async Task<IEnumerable<CandidatoViewModel>> Search(SeachCandidatoInputDto model)
        {
            return await _services.Search(model);
        }
    }
}
