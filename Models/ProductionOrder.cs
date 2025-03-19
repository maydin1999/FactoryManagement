using System.ComponentModel.DataAnnotations;

public class ProductionOrder
{
    public int OrderID { get; set; }

    [Required]
    [MaxLength(100)]
    public string OrderName { get; set; }

    public int DepartmentID { get; set; }
    public Department Department { get; set; }

    [Required]
    [MaxLength(50)]
    public string Status { get; set; } // 'Pending', 'In Progress', 'Completed', 'Cancelled'

    public DateTime StartDate { get; set; } = DateTime.UtcNow;
    public DateTime? EndDate { get; set; }
}
