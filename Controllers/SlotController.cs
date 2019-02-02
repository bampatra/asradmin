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

        [HttpGet]
        [Route("bystaff/{staffID}")]
        public IEnumerable<Slot> GetByStaff(string staffID)
        {
            return slotDataAccessLayer.GetSlotByStaff(staffID);
        }

        [HttpGet]
        [Route("bystudent/{studentID}")]
        public IEnumerable<Slot> GetByStudent(string studentID)
        {
            return slotDataAccessLayer.GetSlotByStudent(studentID);
        }

        [HttpGet]
        [Route("Details/{id}/{time}")]
        public Slot Details(string id, DateTime time)
        {
            return slotDataAccessLayer.GetSlotData(id, time);
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody] Slot slot)
        {
            return slotDataAccessLayer.UpdateSlot(slot);
        }

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] Slot slot)
        {
            return slotDataAccessLayer.AddSlot(slot);
        }

        [HttpGet]
        [Route("Cancel/{id}/{time}")]
        public int Cancel(string id, DateTime time)
        {
            return slotDataAccessLayer.CancelSlot(id, time);
        }

        [HttpDelete]
        [Route("Delete/{id}/{time}")]
        public int Delete(string id, DateTime time)
        {
            return slotDataAccessLayer.DeleteSlot(id, time);
        }
    }
}
