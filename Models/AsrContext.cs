using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ASRadmin.Models
{
    public class AsrContext : DbContext
    {
        //public AsrContext(DbContextOptions<AsrContext> options) : base(options)
        //{ }

        //public DbSet<Room> Room { get; set; }
        //public DbSet<Staff> Staff { get; set; }
        //public DbSet<Student> Student { get; set; }
        //public DbSet<Slot> Slot { get; set; }

        //protected override void OnModelCreating(ModelBuilder builder)
        //{
        //    base.OnModelCreating(builder);
        //    builder.Entity<Slot>().HasKey(x => new { x.RoomID, x.StartTime });
        //}
        public AsrContext()
        {
        }

        public AsrContext(DbContextOptions<AsrContext> options)
            : base(options)
        {
        }

        public DbSet<Room> Room { get; set; }
        public DbSet<Staff> Staff { get; set; }
        public DbSet<Student> Student { get; set; }
        public DbSet<Slot> Slot { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=wdt2019.australiasoutheast.cloudapp.azure.com;Database=s3549111;uid=s3549111;pwd=abc123;MultipleActiveResultSets=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<Slot>().HasKey(x => new { x.RoomID, x.StartTime });
        }
    }
}
