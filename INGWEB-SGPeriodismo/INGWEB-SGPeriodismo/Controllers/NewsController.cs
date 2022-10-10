using INGWEB_SGPeriodismo.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace INGWEB_SGPeriodismo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public NewsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        [Route("AddNews")]

        public Response AddNews(News news)
        {
            Response response = new Response();
            //Connection streamline
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SNCon").ToString());

            Dal dal = new Dal();
            response = dal.AddNews(news, connection);
            return response;
        }

        [HttpGet]
        [Route("NewsList")]

        public Response NewsList()
        {
            Response response = new Response();
            //Connection streamline
            SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("SNCon").ToString());

            Dal dal = new Dal();
            response = dal.NewsList(connection);
            return response;
        }

    }

    
}
