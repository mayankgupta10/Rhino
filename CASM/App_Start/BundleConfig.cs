using System.Web;
using System.Web.Optimization;

namespace CASM
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                         "~/Scripts/jquery-3.1.1.js",
                         "~/Scripts/jquery-ui-1.12.1.js",
                         "~/Scripts/myscript.js"
                         ));


            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"
                      ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                //"~/Content/bootstrap.css",
                      "~/Content/main.css",
                      "~/Content/toaster.css",
                      "~/Content/themes/base/jquery-ui.css",
                      "~/Content/fullcalendar.css",
                      "~/Content/bootstrap-datepicker.css",
                      "~/Content/accordion.css",
                      "~/Content/mystyle.css"
                      
                      ));


            bundles.Add(new ScriptBundle("~/AngularJS").Include(
                    "~/Scripts/angular.js",
                    "~/Scripts/angular-ui/ui-bootstrap.js",
                    "~/Scripts/angular-ui/ui-bootstrap-tpls.js",
                   "~/Scripts/angular-route.js",
                    "~/Scripts/angular-animate.js",
                    "~/Scripts/ui-router.js",
                    "~/Scripts/angular-ui-router.js",
                    "~/Scripts/toaster.js",
                    "~/Scripts/date.js",
                    "~/Scripts/moment.js",
                    "~/Scripts/calendar.js",
                    "~/Scripts/fullcalendar.js",
                    "~/Scripts/gcal.js",
                    "~/Scripts/bootstrap-datepicker.js",
                    "~/Scripts/dirPagination.js"
                    ));

            //bundles.Add(new ScriptBundle("~/AngularJS").Include(
            //         "~/Scripts/angular.js",
            //         "~/Scripts/angular-animate.js",
            //         "~/Scripts/angular-ui-router.js"));


            bundles.Add(new ScriptBundle("~/MyLibs").Include(
                    "~/app/scripts/app.js",
                    "~/app/scripts/controllers/dashboard.js",
                    "~/app/scripts/controllers/login.js",
                     "~/app/scripts/controllers/pilotsCtrl.js",
                     "~/app/scripts/controllers/passengersCtrl.js",
                    "~/app/scripts/controllers/addTripCtrl.js",
                    "~/app/scripts/controllers/aeroplanesCtrl.js",
                    "~/app/scripts/controllers/homeTripCtrl.js",
                    "~/app/scripts/controllers/manageCtrl.js"
                  
                  ));





        }
    }
}
