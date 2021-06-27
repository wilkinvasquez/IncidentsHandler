using Incidentium.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Incidentium.Data.Context
{
    public class IncidentiumDbContext : DbContext
    {
        public IncidentiumDbContext(DbContextOptions<IncidentiumDbContext> options) : base(options)
        {

        }

        public DbSet<Position> Positions { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<SLA> SLAs { get; set; }
        public DbSet<Priority> Priorities { get; set; }
        public DbSet<Incident> Incidents { get; set; }
        public DbSet<IncidentHistory> IncidentHistories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Position

            modelBuilder.Entity<Position>()
               .ToTable("Positions");

            modelBuilder.Entity<Position>()
                .Property(p => p.Name)
                .IsRequired();

            modelBuilder.Entity<Position>()
                .HasOne(p => p.Department)
                .WithMany(d => d.Positions)
                .HasForeignKey(p => p.DepartmentId);

            // Department

            modelBuilder.Entity<Department>()
                .ToTable("Departments");

            modelBuilder.Entity<Department>()
                .Property(d => d.Name)
                .IsRequired();

            // User

            modelBuilder.Entity<User>()
                .ToTable("Users");

            modelBuilder.Entity<User>()
                .Property(d => d.Name)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(d => d.Lastname)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(d => d.IdentificationCard)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(d => d.Mail)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(d => d.Phone)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(d => d.Birthdate)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(d => d.Username)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(d => d.Password)
                .IsRequired();

            modelBuilder.Entity<User>()
                .HasOne(u => u.Position)
                .WithMany(p => p.Users)
                .HasForeignKey(u => u.PositionId);

            // SLA

            modelBuilder.Entity<SLA>()
                .ToTable("SLAs");

            modelBuilder.Entity<SLA>()
                .Property(s => s.Description)
                .IsRequired();

            modelBuilder.Entity<SLA>()
                .Property(s => s.HoursQuantity)
                .IsRequired();

            // Priority

            modelBuilder.Entity<Priority>()
                .ToTable("Priorities");

            modelBuilder.Entity<Priority>()
                .Property(p => p.Name)
                .IsRequired();

            modelBuilder.Entity<Priority>()
                .HasOne(p => p.SLA)
                .WithMany(s => s.Priorities)
                .HasForeignKey(p => p.SlaId);

            // Incident

            modelBuilder.Entity<Incident>()
                .ToTable("Incidents");

            modelBuilder.Entity<Incident>()
                .Property(i => i.Title)
                .IsRequired();

            modelBuilder.Entity<Incident>()
                .Property(i => i.Description)
                .IsRequired();

            modelBuilder.Entity<Incident>()
                .HasOne(i => i.Department)
                .WithMany(d => d.Incidents)
                .HasForeignKey(i => i.DepartmentId);

            modelBuilder.Entity<Incident>()
                .HasOne(i => i.Priority)
                .WithMany(p => p.Incidents)
                .HasForeignKey(i => i.PriorityId);

            modelBuilder.Entity<Incident>()
                .HasOne(i => i.UserReport)
                .WithMany(u => u.Incidents)
                .HasForeignKey(i => i.UserReportId);

            // IncidentHistory

            modelBuilder.Entity<IncidentHistory>()
                .ToTable("IncidentHistories");

            modelBuilder.Entity<IncidentHistory>()
                .Property(ih => ih.Comment)
                .IsRequired();

            modelBuilder.Entity<IncidentHistory>()
                .HasOne(ih => ih.Incident)
                .WithMany(i => i.IncidentHistories)
                .HasForeignKey(ih => ih.IncidentId);
        }
    }
}
