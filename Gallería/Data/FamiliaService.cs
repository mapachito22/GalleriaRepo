using Gallería.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gallería.Data
{
    public class FamiliaService
    {
        private readonly ApplicationDBContext _context;

        public FamiliaService(ApplicationDBContext context)
        {
            _context = context;
        }
        
        //Get All
        public async Task<List<Familia>> All()
        {
            return await _context.Familias.ToListAsync();            
        }   
        
        //Insert
        public async Task<bool> Add(Familia entity)
        {
            _context.Familias.Add(entity);            
            
            return await _context.SaveChangesAsync() > 0;
        }
    
        //Get by Id
        public async Task<Familia> Get(int Id, int Id_Tipo)
        {
            var gallo = await _context.Familias.Where
                (x => x.Familiar == Id && x.Gallo.Id_TipoGallo == Id_Tipo).FirstOrDefaultAsync();

            return gallo;
        }
        
        //Update
        public async Task<bool> Update(Familia entity)
        {
            _context.Entry(entity).State = EntityState.Modified;

            return await _context.SaveChangesAsync() > 0;            
        }
        
        //Delete
        public async Task<int> Delete(List<Familia> familias)
        {
            foreach(var familia in familias)
            {
                var entity = await _context.Familias.FindAsync(familia.Id);
                _context.Familias.Remove(entity);
            }           

            return await _context.SaveChangesAsync();
        }

        public async Task<bool> Save(Familia entity)
        {
            if (entity.Id > 0)
                return await Update(entity);
            else
                return await Add(entity);
        }
    }
}
