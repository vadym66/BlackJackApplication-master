using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BlackJackApp.Controllers.Controllers
{
    public class Data
    {
        public int OrderID { get; set; }
        public int Freight { get; set; }
        public string ShipName { get; set; }
        public DateTime OrderDate { get; set; }
    }
}