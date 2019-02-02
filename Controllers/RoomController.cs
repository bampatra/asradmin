using System.Collections.Generic;
using System.Threading.Tasks;
using ASRadmin.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ASRadmin.Controllers
{
    [Route("api/[controller]")]
    public class RoomController : Controller
    {
        private readonly RoomDataAccessLayer roomDataAccessLayer = new RoomDataAccessLayer();

        [HttpGet]
        [Route("Index")]
        public IEnumerable<Room> Get()
        {
            return roomDataAccessLayer.GetAllRooms();
        }

        [HttpGet]
        [Route("Details/{id}")]
        public Room Details(string id)
        {
            return roomDataAccessLayer.GetRoomData(id);
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody] Room room)
        {
            return roomDataAccessLayer.UpdateRoom(room);
        }

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] Room room)
        {
            return roomDataAccessLayer.AddRoom(room);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public int Delete(string id)
        {
            return roomDataAccessLayer.DeleteRoom(id);
        }
    }
}
