using System.Collections.Generic;
using System.Threading.Tasks;
using ASRadmin.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using test.Models;

namespace ASRadmin.Controllers
{
    [Route("api/[controller]")]
    public class StaffController : Controller
    {
        private readonly StaffDataAccessLayer staffDataAccessLayer = new StaffDataAccessLayer();

        [HttpGet]
        [Route("Index")]
        public IEnumerable<Staff> Get()
        {
            return staffDataAccessLayer.GetAllStaffs();
        }


    }
}
