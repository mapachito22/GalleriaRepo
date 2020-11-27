using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Gallería.Models
{
    public class Usuario : IdentityUser
    {
        public string Nombre { get; set; }
        public string Ap_Paterno { get; set; }
        public string Ap_Materno { get; set; }
        [NotMapped]
        public string pass { get; set; }
        [NotMapped]
        public string confPass { get; set; }
        public Usuario()
        {
            this.UserName = " ";
            this.pass = this.confPass = "";
        }
    }
}
