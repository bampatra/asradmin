using System.Collections.Generic;
using System.Linq;
using ASRadmin.Models;

namespace test.Models
{
    public class StaffDataAccessLayer
    {
        private readonly AsrContext db = new AsrContext();

        public List<Staff> GetAllStaffs()
        {
            return db.Staff.ToList();
        }
    }
}