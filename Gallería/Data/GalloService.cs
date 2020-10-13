using Gallería.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gallería.Data
{
    public class GalloService
    {
        private readonly ApplicationDBContext _context;

        public GalloService(ApplicationDBContext context)
        {
            _context = context;
        }
        
        //Get All
        public async Task<List<Gallo>> All()
        {
            var gallosList = _context.Gallos.ToListAsync();

            return await gallosList;
        } 
        
        //Insert
        public async Task<bool> Add(Gallo entity)
        {
            _context.Gallos.Add(entity);            
            
            return await _context.SaveChangesAsync() > 0;
        }
    
        //Get by Id
        public async Task<Gallo> Get(int Id)
        {
            return await _context.Gallos.FindAsync(Id);
        }
        
        //Update
        public async Task<bool> Update(Gallo entity)
        {
            _context.Entry(entity).State = EntityState.Modified;

            return await _context.SaveChangesAsync() > 0;            
        }
        
        //Delete
        public async Task<bool> Delete(int id)
        {
            var entity = await _context.Gallos.FindAsync(id);
            _context.Gallos.Remove(entity);

            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> Save(Gallo entity)
        {
            if (entity.Id > 0)
                return await Update(entity);
            else
                return await Add(entity);
        }
    }
}
