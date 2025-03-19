using System.ComponentModel.DataAnnotations;

public class Machine
{
    public int MachineID { get; set; }

    [Required]
    [MaxLength(100)]
    public string MachineName { get; set; }

    public int DepartmentID { get; set; }
    public Department Department { get; set; }

    [Required]
    [MaxLength(50)]
    public string Status { get; set; } // 'Operational', 'Maintenance', 'Out of Order'

    public DateTime? PurchaseDate { get; set; }
}
