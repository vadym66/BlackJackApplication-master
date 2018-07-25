using System.Collections.Generic;

namespace BlackJackApp.ViewModels.GameModels
{
    public class UserView
    {
        public List<UserViewItem> Users { get; set; }

        public UserView()
        {
            Users = new List<UserViewItem>();
        }
    }

    public class UserViewItem
    {
        public string Name { get; set; }
    }
}
