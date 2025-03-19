using System.ComponentModel.DataAnnotations;

public class MaintenanceRecord
{
    public int RecordID { get; set; }

    public int MachineID { get; set; }
    public Machine Machine { get; set; }

    public DateTime MaintenanceDate { get; set; } = DateTime.UtcNow;

    [Required]
    [MaxLength(500)]
    public string Description { get; set; }

    public int? PerformedBy { get; set; }
    public User? User { get; set; }
}
