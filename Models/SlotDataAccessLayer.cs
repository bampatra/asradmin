using System;
using System.Collections.Generic;
using System.Linq;
using ASRadmin.Models;
using Microsoft.EntityFrameworkCore;

namespace test.Models
{
    public class SlotDataAccessLayer
    {
        private readonly AsrContext db = new AsrContext();

        public IEnumerable<Slot> GetAllSlots()
        {
            return db.Slot.ToList();
        }

        public IEnumerable<Slot> GetSlotByStaff(string staffID)
        {
            return db.Slot.Where(m => m.StaffID == staffID).ToList();
        }

        public IEnumerable<Slot> GetSlotByStudent(string studentID)
        {
            return db.Slot.Where(m => m.StudentID == studentID).ToList();
        }

        // To Add new slot record.
        public int AddSlot(Slot slot)
        {
            db.Slot.Add(slot);
            db.SaveChanges();
            return 1;
        }

        // Get the details of a particular slot.
        public Slot GetSlotData(string id, DateTime time)
        {
            var slot = db.Slot.Find(id, time);
            return slot;
        }

        // To Update the records of a particular slot.
        public int UpdateSlot(Slot slot)
        {
            /*db.Entry(slot).State = EntityState.Modified;*/
            db.Slot.Update(slot);
            db.SaveChanges();
            return 1;
        }

        // Get the details of a particular slot.
        public int CancelSlot(string id, DateTime time)
        {
            var slot = db.Slot.Find(id, time);
            slot.StudentID = null;
            db.SaveChanges();
            return 1;
        }

        // To Delete the record of a particular slot.
        public int DeleteSlot(string RoomID, DateTime time)
        {
            var emp = db.Slot.Find(RoomID, time);
            db.Slot.Remove(emp);
            db.SaveChanges();
            return 1;
        }
    }
}
