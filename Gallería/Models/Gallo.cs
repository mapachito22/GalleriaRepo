using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Gallería.Models
{
    [Table("Gallo")]
    public class Gallo
    {
        [Key]
        public int Id { get; set; }

        public string Alias { get; set; }

        [MaxLength(50)]
        [Required]
        public string Matricula { get; set; }

        [Required]
        public DateTime FechaNacimiento { get; set; } = DateTime.Now;

        [ForeignKey("TipoGallo")]
        public int Id_TipoGallo { get; set; }
        public TipoGallo TipoGallo { get; set; }
    }
}
