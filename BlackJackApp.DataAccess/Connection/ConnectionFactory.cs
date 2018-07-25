using System.Data.Common;
using System.Data.SqlClient;

namespace BlackJackApp.Connection
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
