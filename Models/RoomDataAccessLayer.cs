using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace ASRadmin.Models
{
    public class RoomDataAccessLayer
    {
        private readonly AsrContext db = new AsrContext();

        public List<Room> GetAllRooms()
        {
            return db.Room.ToList();
        }

        // To Add new room record.
        public int AddRoom(Room room)
        {
            db.Room.Add(room);
            db.SaveChanges();
            return 1;
        }

        // Get the details of a particular room.
        public Room GetRoomData(string id)
        {
            var room = db.Room.Find(id);
            return room;
        }

        // To Update the records of a particular room.
        public int UpdateRoom(Room room)
        {
            db.Room.Update(room);
            db.SaveChanges();
            return 1;
        }

        // To Delete the record of a particular room.
        public int DeleteRoom(string RoomID)
        {
            var emp = db.Room.Find(RoomID);
            db.Room.Remove(emp);
            db.SaveChanges();
            return 1;
        }
    }
}
