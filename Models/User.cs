using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

public class User : IdentityUser<int>  // Identity için int kullanıyoruz
{
    [Required]
    [MaxLength(50)]
    public string FirstName { get; set; }

    [Required]
    [MaxLength(50)]
    public string LastName { get; set; }

    [Required]
    public string Role { get; set; } // 'Admin', 'Manager', 'Worker'

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
