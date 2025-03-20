using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("Departments")]
public class Department
{
    public int DepartmentID { get; set; }

    [Required]
    [MaxLength(100)]
    public string DepartmentName { get; set; }

    public int? ManagerID { get; set; }
    public User? Manager { get; set; }
}
