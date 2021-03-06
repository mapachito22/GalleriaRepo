﻿using Gallería.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gallería.Data
{
    public class PrefijoService
    {
        private readonly ApplicationDBContext _context;

        public PrefijoService(ApplicationDBContext context)
        {
            _context = context;
        }

        //Get All
        public async Task<List<Prefijo>> All()
        {
            var PrefijosList = _context.Prefijos.Where(x => x.eliminado != true).ToListAsync();

            return await PrefijosList;
        }

        public async Task<List<Prefijo>> AllSearch(string searchText)
        {
            var prefijoList = _context.Prefijos
                .Where(x => x.eliminado != true && x.Descripcion.ToLower().Contains(searchText.ToLower())).ToListAsync();

            return await prefijoList;
        }

        //Insert
        public async Task<bool> Add(Prefijo entity)
        {
            _context.Prefijos.Add(entity);

            return await _context.SaveChangesAsync() > 0;
        }

        //Get by Id
        public async Task<Prefijo> Get(int Id)
        {
            return await _context.Prefijos.FindAsync(Id);
        }

        //Update
        public async Task<bool> Update(Prefijo entity)
        {
            _context.Entry(entity).State = EntityState.Modified;

            return await _context.SaveChangesAsync() > 0;
        }

        //Delete
        public async Task<bool> Delete(int id)
        {
            var entity = await _context.Prefijos.FindAsync(id);
            entity.eliminado = true;
            //_context.Gallos.Remove(entity);
            _context.Entry(entity).State = EntityState.Modified;
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> Save(Prefijo entity)
        {
            if (entity.Id > 0)
                return await Update(entity);
            else
                return await Add(entity);
        }
    }
}
