using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class ActivitiesController(AppDbContext context) : BaseApiController
{
    // Get all list of activities
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
        return await context.Activities.ToListAsync();
    }

    // Get specific activity using primary key
    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivityDetail(string id)
    {
        var activity = await context.Activities.FindAsync(id);
        return activity == null ? NotFound() : activity;
    }
}
