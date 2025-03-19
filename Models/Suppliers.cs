using System.ComponentModel.DataAnnotations;

public class Supplier
{
    public int SupplierID { get; set; }

    [Required]
    [MaxLength(100)]
    public string SupplierName { get; set; }

    [MaxLength(100)]
    public string? ContactName { get; set; }

    [MaxLength(100)]
    public string? ContactEmail { get; set; }

    [MaxLength(20)]
    public string? Phone { get; set; }
}
