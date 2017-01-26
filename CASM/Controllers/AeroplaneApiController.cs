using Data_Access_Layer.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CASM.Controllers
{
    public class AeroplaneApiController : ApiController
    {
        CasmContext db = new CasmContext();
        // GET api/aeroplaneapi
        public IEnumerable<AeroplanesDetail> Get()
        {
            return db.AeroplanesDetails;
        }

        // GET api/aeroplaneapi/5
        public AeroplanesDetail Get(int id)
        {
            return db.AeroplanesDetails.Find(id);
        }

        // POST api/aeroplaneapi
        public void Post( AeroplanesDetail aeroplane)
        {

            db.AeroplanesDetails.Add(aeroplane);
            db.SaveChanges();
        }

        // PUT api/aeroplaneapi/5
        public HttpResponseMessage Put(AeroplanesDetail aeroplane)
        {

            if (ModelState.IsValid)
            {
                db.Entry(aeroplane).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, aeroplane);
                return response;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // DELETE api/aeroplaneapi/5
        public HttpResponseMessage Delete(int id)
        {
            AeroplanesDetail aeroplane = db.AeroplanesDetails.Find(id);
            if (aeroplane == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            db.AeroplanesDetails.Remove(aeroplane);
            db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.OK, aeroplane);


        }
    }
}
