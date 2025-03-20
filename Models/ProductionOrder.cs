using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("ProductionOrders")]
public class ProductionOrder
{
    [Key]
    public int OrderID { get; set; }

    [Required]
    [MaxLength(100)]
    public string OrderName { get; set; }

    public int DepartmentID { get; set; }
    public Department Department { get; set; }

    [Required]
    [MaxLength(50)]
    public string Status { get; set; }

    public DateTime StartDate { get; set; } = DateTime.UtcNow;
    public DateTime? EndDate { get; set; }
}
