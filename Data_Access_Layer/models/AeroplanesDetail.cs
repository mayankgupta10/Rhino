using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access_Layer.models
{
   public class AeroplanesDetail
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string CallSign { get; set; }
        public string Type { get; set; }
        public string Color { get; set; }

    }
}
