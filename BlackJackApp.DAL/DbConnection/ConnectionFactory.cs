using System.Data.Common;
using System.Data.SqlClient;
using System.Web.Configuration;

namespace BlackJackApp.DAL.Dapper
{
    public class ConnectionFactory
    {
        public static DbConnection GetOpenDbConnection(string con)
        {
            var connection = new SqlConnection(con);
            connection.Open();

            return connection;
        }
    }
}
