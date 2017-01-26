using Data_Access_Layer.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CASM.Controllers
{
    public class HomeController : Controller
    {
        private CasmContext db;
        public HomeController()
        {
            db = new CasmContext();
        }
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public JsonResult GetEvents()
        {
                var v = db.AddTripDetails.OrderBy(a => a.Date).ToList();
                return new JsonResult { Data = v, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }

    }
}
