using CrudEmployeeDw.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace CrudEmployeeDw.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }
    }
}
