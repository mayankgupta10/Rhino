using Data_Access_Layer.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CASM.Controllers
{
    public class TripDetailsApiController : ApiController
    {
        CasmContext db = new CasmContext();

        // GET api/tripdetailsapi
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/tripdetailsapi/5
        public AddTripDetail Get(int id)
        {
            return db.AddTripDetails.Find(id);
        }

        // POST api/tripdetailsapi
        public void Post(AddTripDetail trip)
        {
            db.AddTripDetails.Add(trip);
            db.SaveChanges();

        }

        // PUT api/tripdetailsapi/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/tripdetailsapi/5
        public void Delete(int id)
        {
        }
    }
}
