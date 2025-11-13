using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using Medicalcare_API.Helpers;
using Medicalcare_API.DTOs;
using Medicalcare_API.Models;

namespace Medicalcare_API.Controllers{

    [ApiController]
    [Route("api/[controller]")]
    public class AccountController: ControllerBase{
        readonly DataContext context;

        public AccountController(DataContext context){
            this.context = context;
        }
 
        [HttpGet]
        public async Task<IActionResult> GetAccounts()
        {
            var data = await this.context.m_account.ToListAsync();


            return Ok(data);
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register(RegisterDTO registerDto)
        {
            // Validate the incoming model.
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            string? email = registerDto?.Email?.ToLower();
            // Check if the email already exists.
            Account? item = await this.context.m_account.FirstOrDefaultAsync(m => m.email == email);
            if (item != null)
            {
                return Conflict(new { message = "Email is already registered." });
            }

            // Create a new user entity.
            var newAccount = new Account
            {
                first_name = registerDto?.Firstname,
                last_name = registerDto?.Lastname,
                email = email,
                password = registerDto?.Password,
                account_name = registerDto?.Accountname
            };

            await Task.Run(() =>
            {
                this.context.m_account.Add(newAccount);
                this.context.SaveChanges();
            });
            return Ok(new { message = "User registered successfully." });
        }        
    }
}