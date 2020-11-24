using BlazorInputFile;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Gallería.Models
{
    [Table("Imagen")]
    public class Imagen
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Gallo")]
        public int Id_Gallo { get; set; }
        public Gallo Gallo { get; set; }
                
        [MaxLength(50)] 
        public string nombre { get; set; }

        public byte[] imagen { get; set; }

        public string type { get; set; }

        [NotMapped]
        public string data { get; set; }
        
        [NotMapped]
        public IFileListEntry file { get; set; }

    }
}
