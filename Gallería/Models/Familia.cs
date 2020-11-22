using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Gallería.Models
{
    [Table("Familia")]
    public class Familia
    {
        [Key]
        public int Id { get; set; }
                
        [ForeignKey("Gallo")]
        public int? Id_Gallo { get; set; }
        public Gallo Gallo { get; set; }

        public int Familiar { get; set; }

    }
}
