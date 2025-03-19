using System.ComponentModel.DataAnnotations;

public class Inventory
{
    public int ItemID { get; set; }

    [Required]
    [MaxLength(100)]
    public string ItemName { get; set; }

    [Required]
    [Range(0, int.MaxValue)]
    public int Quantity { get; set; }

    [Required]
    [Range(0, double.MaxValue)]
    public decimal UnitPrice { get; set; }

    public int? SupplierID { get; set; }
    public Supplier? Supplier { get; set; }

    public DateTime LastUpdated { get; set; } = DateTime.UtcNow;
}
