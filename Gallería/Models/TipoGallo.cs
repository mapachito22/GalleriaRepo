﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Gallería.Models
{
    [Table("TipoGallo")]
    public class TipoGallo
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Descripcion { get; set; }

        public bool? eliminado { get; set; }

        public ICollection<Gallo> Gallos { get; set; }
    }
}
