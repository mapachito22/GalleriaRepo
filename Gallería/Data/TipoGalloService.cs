using Gallería.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gallería.Data
{
    public class TipoGalloService
    {
        private readonly ApplicationDBContext _context;

        public TipoGalloService(ApplicationDBContext context)
        {
            _context = context;
        }

        //Get All
        public async Task<List<TipoGallo>> All()
        {
            var tipogallosList = _context.TipoGallos.ToListAsync();

            return await tipogallosList;
        }

        //Insert
        public async Task<bool> Add(TipoGallo entity)
        {
            _context.TipoGallos.Add(entity);

            return await _context.SaveChangesAsync() > 0;
        }

        //Get by Id
        public async Task<TipoGallo> Get(int Id)
        {
            return await _context.TipoGallos.FindAsync(Id);
        }

        //Update
        public async Task<bool> Update(TipoGallo entity)
        {
            _context.Entry(entity).State = EntityState.Modified;

            return await _context.SaveChangesAsync() > 0;
        }

        //Delete
        public async Task<bool> Delete(int id)
        {
            var entity = await _context.TipoGallos.FindAsync(id);
            _context.TipoGallos.Remove(entity);

            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> Save(TipoGallo entity)
        {
            if (entity.Id > 0)
                return await Update(entity);
            else
                return await Add(entity);
        }
    }
}
