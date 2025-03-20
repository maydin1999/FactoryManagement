using Microsoft.AspNetCore.Identity;
using System;
using System.Threading.Tasks;

public class DatabaseSeeder
{
    public static async Task SeedRoles(RoleManager<IdentityRole<int>> roleManager)
    {
        if (!await roleManager.RoleExistsAsync("Admin"))
            await roleManager.CreateAsync(new IdentityRole<int>("Admin"));

        if (!await roleManager.RoleExistsAsync("Manager"))
            await roleManager.CreateAsync(new IdentityRole<int>("Manager"));

        if (!await roleManager.RoleExistsAsync("Worker"))
            await roleManager.CreateAsync(new IdentityRole<int>("Worker"));
    }
}
