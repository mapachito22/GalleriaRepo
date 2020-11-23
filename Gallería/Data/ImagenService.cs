using BlazorInputFile;
using Gallería.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace Gallería.Data
{
    public class ImagenService
    {
        private readonly ApplicationDBContext _context;

        public ImagenService(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task UploadAsync(List<Imagen> imagenes, int id)
        {
            try
            {
                bool primera = false;
                foreach (Imagen item in imagenes)
                {
                    if (!primera)
                    {
                        await Delete(item.Id_Gallo);
                        primera= true;
                    }
                    Imagen myImage = new Imagen();
                    myImage.imagen = getImagen(item.data);
                    myImage.nombre = item.nombre;
                    myImage.Id_Gallo = id;
                    await Add(myImage);                    
                }
            }
            catch(Exception ex)
            {
                throw ex;
            }

        }

        public async Task<bool> Add(Imagen entity)
        {
            
            _context.Imagens.Add(entity);

            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<int> Delete(int idGallo)
        {
            var imagenes = _context.Imagens.Where(x => x.Id_Gallo == idGallo);

            foreach (var item in imagenes)
            {
                _context.Imagens.Remove(item);
            }

            return await _context.SaveChangesAsync();
        }
        private byte[] getImagen(string data)
        {
            byte[] bytes = null;
            if (!string.IsNullOrEmpty(data))
            {
                bytes = Convert.FromBase64String(data);
            }
            return bytes;
        }
    }
}
