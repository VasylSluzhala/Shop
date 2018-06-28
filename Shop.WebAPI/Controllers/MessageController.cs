using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Shop.WebAPI.Controllers
{
    public class MessageController : ApiController
    {
        public HttpResponseMessage Get()
        {
            return Request.CreateResponse(
                HttpStatusCode.OK,
                "Works 1");
        }

        public HttpResponseMessage Post(string message)
        {
            if (message == null)
            {
                return Request.CreateErrorResponse(
                    HttpStatusCode.BadRequest,
                    "Invalid input");
            }
            return Request.CreateResponse(HttpStatusCode.Created);
        }

        public HttpResponseMessage Post()
        {
            //if (message == null)
            //{
            //    return Request.CreateErrorResponse(
            //        HttpStatusCode.BadRequest,
            //        "Invalid input");
            //}
            return Request.CreateResponse(HttpStatusCode.Created);
        }
    }
}
