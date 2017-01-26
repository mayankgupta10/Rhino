using Data_Access_Layer.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CASM.Controllers
{
    public class PassengerApiController : ApiController
    {
        CasmContext db = new CasmContext();

        // GET api/passengerapi
        public IEnumerable<PassengersDetail> Get()
        {
            return db.PassengersDetails;
        }

        // GET api/passengerapi/5
        public PassengersDetail Get(int id)
        {
            return db.PassengersDetails.Find(id);
        }

        // POST api/passengerapi
        public void Post(PassengersDetail passenger)
        {

            db.PassengersDetails.Add(passenger);
            db.SaveChanges();

        }

        // PUT api/passengerapi/5
        public HttpResponseMessage Put(PassengersDetail passenger)
        {

            if (ModelState.IsValid)
            {
                db.Entry(passenger).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, passenger);
                return response;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

        }

        // DELETE api/passengerapi/5
        public HttpResponseMessage Delete(int id)
        {

            PassengersDetail passenger = db.PassengersDetails.Find(id);
            if (passenger == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            db.PassengersDetails.Remove(passenger);
            db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.OK, passenger);

        }
    }
}
