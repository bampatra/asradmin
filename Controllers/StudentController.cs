using System.Collections.Generic;
using System.Threading.Tasks;
using ASRadmin.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using test.Models;

namespace ASRadmin.Controllers
{
    [Route("api/[controller]")]
    public class StudentController : Controller
    {
        private readonly StudentDataAccessLayer studentDataAccessLayer = new StudentDataAccessLayer();

        [HttpGet]
        [Route("Index")]
        public IEnumerable<Student> Get()
        {
            return studentDataAccessLayer.GetAllStudents();
        }


    }
}
