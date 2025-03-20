using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Users")]
public class User : IdentityUser<int>
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
