using System;
using System.Collections.Generic;
using System.Linq;
using ASRadmin.Models;

namespace test.Models
{
    public class SlotDataAccessLayer
    {
        private readonly AsrContext db = new AsrContext();

        public IEnumerable<Slot> GetAllSlots()
        {
            return db.Slot.ToList();
        }
    }
}
