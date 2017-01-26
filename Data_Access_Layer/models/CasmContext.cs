using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data_Access_Layer.models
{
   public class CasmContext :DbContext
    {
       public CasmContext():base("CasmConnectionString")
       {
       }

       public DbSet<PilotsDetail> PilotsDetails { get; set; }
       public DbSet<PassengersDetail> PassengersDetails { get; set; }
       public DbSet<AeroplanesDetail> AeroplanesDetails { get; set; }
       public DbSet<AddTripDetail> AddTripDetails { get; set; }
    }
}
