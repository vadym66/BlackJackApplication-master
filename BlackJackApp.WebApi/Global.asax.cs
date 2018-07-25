using System.Configuration;
using System.Reflection;
using System.Web;
using System.Web.Http;
using Autofac;
using Autofac.Integration.WebApi;
using BlackJackApp.Controllers.Util;

namespace BlackJackApp.WebApi
{
    public class WebApiApplication : HttpApplication
    {
        protected void Application_Start()
        {            
            var builder = new ContainerBuilder();
            var config = GlobalConfiguration.Configuration;
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
            AutofacConfig.ConfigureContainer(builder, ConfigurationManager.ConnectionStrings["BlackJackDb"].ConnectionString);
            var container = builder.Build();
            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }
    }
}
