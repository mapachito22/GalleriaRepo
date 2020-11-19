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
        public string ruta { get; set; }

    }
}
