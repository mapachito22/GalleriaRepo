using Gallería.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Cryptography;
using System;

namespace Gallería.Data
{
    public class UsuarioService
    {
        private readonly ApplicationDBContext _context;

        public UsuarioService(ApplicationDBContext context)
        {
            _context = context;
        }

        //Get All
        public async Task<List<Usuario>> All()
        {
            var UsuariosList = _context.Usuarios.ToListAsync();

            return await UsuariosList;
        }

        public static string HashPassword(string password)
        {
            byte[] salt;
            byte[] buffer2;
            if (password == null)
            {
                throw new ArgumentNullException("password");
            }
            using (Rfc2898DeriveBytes bytes = new Rfc2898DeriveBytes(password, 0x10, 0x3e8))
            {
                salt = bytes.Salt;
                buffer2 = bytes.GetBytes(0x20);
            }
            byte[] dst = new byte[0x31];
            Buffer.BlockCopy(salt, 0, dst, 1, 0x10);
            Buffer.BlockCopy(buffer2, 0, dst, 0x11, 0x20);
            return Convert.ToBase64String(dst);
        }

        //Insert
        public async Task<bool> Add(Usuario entity)
        {
            entity.PasswordHash = HashPassword(entity.pass);
            entity.NormalizedUserName = entity.UserName.ToUpper();
            _context.Usuarios.Add(entity);

            return await _context.SaveChangesAsync() > 0;
        }

        //Get by Id
        public async Task<Usuario> Get(string Id)
        {
            return await _context.Usuarios.FindAsync(Id);
        }

        public async Task<Usuario> GetByName(string name)
        {
            return await _context.Usuarios.Where(x => x.UserName == name).FirstOrDefaultAsync();
        }

        //Update
        public async Task<bool> Update(Usuario entity)
        {
            Usuario usuarioActual = await Get(entity.Id);
            entity.PasswordHash = entity.PasswordHash != usuarioActual.PasswordHash ? HashPassword(entity.pass) : entity.PasswordHash;
            entity.NormalizedUserName = entity.UserName.ToUpper();
            _context.Entry(entity).State = EntityState.Modified;

            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> UpdateCurrent(Usuario entity)
        {
            Usuario usuarioActual = await Get(entity.Id);
            entity.PasswordHash = HashPassword(entity.pass);
            entity.NormalizedUserName = entity.UserName.ToUpper();
            _context.Entry(entity).State = EntityState.Modified;

            return await _context.SaveChangesAsync() > 0;
        }

        ////Delete
        //public async Task<bool> Delete(int id)
        //{
        //    var entity = await _context.Usuarios.FindAsync(id);
        //    entity.eliminado = true;
        //    //_context.Gallos.Remove(entity);
        //    _context.Entry(entity).State = EntityState.Modified;
        //    return await _context.SaveChangesAsync() > 0;
        //}

        public async Task<bool> Save(Usuario entity, bool nuevo)
        {
            if(!nuevo)
                return await Update(entity);
            else
                return await Add(entity);
        }
    }
}

