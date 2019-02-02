using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASRadmin.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using test.Models;

namespace ASRadmin.Controllers
{
    [Route("api/[controller]")]
    public class SlotController : Controller
    {
        private readonly SlotDataAccessLayer slotDataAccessLayer = new SlotDataAccessLayer();

        [HttpGet]
        [Route("Index")]
        public IEnumerable<Slot> Get()
        {
            return slotDataAccessLayer.GetAllSlots();
        }
    }
}
