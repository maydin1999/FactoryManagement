using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class MachineController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public MachineController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Machine>>> GetMachines()
    {
        return await _context.Machines.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Machine>> GetMachine(int id)
    {
        var machine = await _context.Machines.FindAsync(id);
        if (machine == null)
            return NotFound();

        return machine;
    }

    [HttpPost]
    public async Task<ActionResult<Machine>> CreateMachine(Machine machine)
    {
        _context.Machines.Add(machine);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetMachine), new { id = machine.MachineID }, machine);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateMachine(int id, Machine machine)
    {
        if (id != machine.MachineID)
            return BadRequest();

        _context.Entry(machine).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteMachine(int id)
    {
        var machine = await _context.Machines.FindAsync(id);
        if (machine == null)
            return NotFound();

        _context.Machines.Remove(machine);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}
