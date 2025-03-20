using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : IdentityDbContext<User, IdentityRole<int>, int>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) {}

    public DbSet<Department> Departments { get; set; }
    public DbSet<Machine> Machines { get; set; }
    public DbSet<ProductionOrder> ProductionOrders { get; set; }
    public DbSet<MaintenanceRecord> MaintenanceRecords { get; set; }
}
