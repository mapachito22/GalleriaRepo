using Gallería.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Update;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gallería.Data
{
    public class GalloService
    {
        private readonly ApplicationDBContext _context;
        private FamiliaService familiaService;

        public GalloService(ApplicationDBContext context)
        {
            _context = context;
            familiaService = new FamiliaService(context);
        }
        
        //Get All
        public async Task<List<Gallo>> All()
        {
            var gallosList = _context.Gallos.ToListAsync();

            return await gallosList;
        } 
        
        public async Task<List<Gallo>> AllMadres(string searchText)
        {
            var gallosList = _context.Gallos.Where(x => x.Id_TipoGallo == 2 && 
            (x.Matricula.ToLower().Contains(searchText.ToLower()) || x.Alias.ToLower().Contains(searchText.ToLower()))).ToListAsync();

            return await gallosList;
        } 
        
        public async Task<List<Gallo>> AllPadres(string searchText)
        {
            var gallosList = _context.Gallos.Where(x => x.Id_TipoGallo == 1 && 
            (x.Matricula.ToLower().Contains(searchText.ToLower()) || x.Alias.ToLower().Contains(searchText.ToLower()))).ToListAsync();

            return await gallosList;
        } 
        
        //Insert
        public async Task<bool> Add(Gallo entity, Gallo padre, Gallo madre)
        {
            Familia fPadre = new Familia();
            Familia fMadre = new Familia();
            
            _context.Gallos.Add(entity);
            
            var result = await _context.SaveChangesAsync();
            
            var familias = _context.Familias.Where(x => x.Familiar == entity.Id).ToList();
            if(familias != null && familias.Count != 0)
                result += await familiaService.Delete(familias);
            
            if(padre != null)
            {
                fPadre.Gallo = padre;
                fPadre.Familiar = entity.Id;
                _context.Familias.Add(fPadre);
            }

            if (madre != null)
            {
                fMadre.Gallo = madre;
                fMadre.Familiar = entity.Id;
                _context.Familias.Add(fMadre);
            }
            
            result += await _context.SaveChangesAsync();

            return result > 0;
        }
    
        //Get by Id
        public async Task<Gallo> Get(int Id)
        {
            return await _context.Gallos.FindAsync(Id);
        }
        
        //Update
        public async Task<bool> Update(Gallo entity, Gallo padre, Gallo madre)
        {
            Familia fPadre = new Familia();
            Familia fMadre = new Familia();
            int result = 0;

            var familias = _context.Familias.Where(x => x.Familiar == entity.Id).ToList();
            if(familias != null && familias.Count != 0)
                await familiaService.Delete(familias);

            _context.Entry(entity).State = EntityState.Modified;

            if (padre != null)
            {
                fPadre.Gallo = padre;
                fPadre.Familiar = entity.Id;
                _context.Familias.Add(fPadre);
            }

            if (madre != null)
            {
                fMadre.Gallo = madre;
                fMadre.Familiar = entity.Id;
                _context.Familias.Add(fMadre);
            }

            result += await _context.SaveChangesAsync();
            return result > 0;
        }
        
        //Delete
        public async Task<bool> Delete(int id)
        {
            var entity = await _context.Gallos.FindAsync(id);
            _context.Gallos.Remove(entity);

            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> Save(Gallo entity, Gallo padre, Gallo madre)
        {
            if (entity.Id > 0)
                return await Update(entity, padre, madre);
            else
                return await Add(entity, padre, madre);
        }
    }
}
