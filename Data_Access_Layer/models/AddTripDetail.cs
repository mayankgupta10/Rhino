using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access_Layer.models
{
   public  class AddTripDetail
    {
        public int Id { get; set; }
        public string Tittle{ get; set; }
        public DateTime Date { get; set; }
        public string Destination { get; set; }
        public string Aeroplane { get; set; }

    }
}
