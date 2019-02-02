using System.Collections.Generic;
using System.Linq;
using ASRadmin.Models;

namespace test.Models
{
    public class StudentDataAccessLayer
    {
        private readonly AsrContext db = new AsrContext();

        public List<Student> GetAllStudents()
        {
            return db.Student.ToList();
        }
    }
}