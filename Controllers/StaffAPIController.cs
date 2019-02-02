using System.Collections.Generic;
using System.Threading.Tasks;
using ASRadmin.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ASRadmin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StaffController : ControllerBase
    {
        private readonly AsrContext _context;

        public StaffController(AsrContext context)
        {
            _context = context;

        }

        // GET: /<controller>/
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Staff>>> GetStaffs()
        {
            return await _context.Staff.ToListAsync();
        }

        // GET: api/<controller>/<id>
        [HttpGet("{staffID}")]
        public async Task<ActionResult<Staff>> GetStaffItem(string staffID)
        {
            var staffItem = await _context.Staff.FindAsync(staffID);

            if (staffItem == null)
            {
                return NotFound();
            }

            return staffItem;
        }
    }
}
