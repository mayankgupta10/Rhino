using Data_Access_Layer.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CASM.Controllers
{
    public class PilotApiController : ApiController
    {

        CasmContext db = new CasmContext();

        // GET api/pilotapi
        public IEnumerable<PilotsDetail> Get()
        {

            //var names = from o in db.PassengersDetails select o.FirstName;
            //foreach (var o in names)
            //{
            //    Console.WriteLine(o);
            //}



            return db.PilotsDetails;
        }

        // GET api/pilotapi/5
        public PilotsDetail Get(int id)
        {
            return db.PilotsDetails.Find(id);
        }

        // POST api/pilotapi
        public void Post(PilotsDetail pilots)
        {

            db.PilotsDetails.Add(pilots);
            db.SaveChanges();
        }

        // PUT api/pilotapi/5
        public HttpResponseMessage Put(PilotsDetail pilot)
        {
            if (ModelState.IsValid)
            {
                db.Entry(pilot).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, pilot);
                return response;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

        }

        // DELETE api/pilotapi/5
        public HttpResponseMessage Delete(int id)
        {
            PilotsDetail pilot = db.PilotsDetails.Find(id);
            if (pilot == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            db.PilotsDetails.Remove(pilot);
            db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.OK, pilot);

        }
    }
}
