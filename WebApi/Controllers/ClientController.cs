using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TestTask.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class ClientController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<Client> GetClients()
        {        
            return GetRandomData();
        }

        private static IEnumerable<Client> GetRandomData()
        {
            Random rnd = new Random();
            List<Client> clients = new List<Client>();
            for (int i = 0; i < 20; i++)
            {
                Client client = new Client()
                {
                    FirstName = firstNames[rnd.Next(0, 10)],
                    LastName = lastNames[rnd.Next(0, 10)],
                    Address = cities[rnd.Next(0, 8)],
                    PhoneNumbers = GetRandomNumbers(rnd.Next(2, 4)),
                    Tasks = new List<Task>()
                };
                for (int j = 0; j < rnd.Next(1, 11); j++)
                {
                    DateTime time = GetRandomDate();
                    client.Tasks.Add(new Task()
                    {
                        TaskName = "Task#" + (j+1),
                        Description = description,
                        StartTime = time,
                        EndTime = time.AddDays(rnd.Next(1, 365))
                    });
                }
                clients.Add(client);
            }
            return clients;
        }

        private static DateTime GetRandomDate()
        {
            DateTime minDate = new DateTime(2016, 1, 1, 0, 0, 0);
            DateTime maxDate = new DateTime(2018, 10, 1, 0, 0, 0);
            int difference = Convert.ToInt32(maxDate.Subtract(minDate).TotalDays + 1);
            Random rnd = new Random();
            return minDate.AddDays(rnd.Next(1, difference));
        }

        private static string GetRandomNumbers(int n)
        {
            Random rnd = new Random();
            string numbers = "";
            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < 10; j++)
                {
                    numbers += rnd.Next(0,10);
                }
                numbers += ", ";
            }
            return numbers.Substring(0, numbers.Length - 2);
        }

        #region Default values
        private static string[] firstNames = new[]
        {
            "John", "Peter", "James", "Bill", "Ann", "Kate", "Donald", "Sam", "Alex", "David"
        };
        private static string[] lastNames = new[]
        {
            "Black", "Brown", "Stone", "Smith", "Johnson", "Williams", "Miller", "Wilson", "Jackson", "Turner"
        };
        private static string[] cities = new[]
        {
            "New York", "Paris", "Tokyo", "Dubai", "London", "Moscow", "Kiev", "Berlin"
        };
        private static string description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in mollis augue. Mauris tincidunt molestie placerat. Suspendisse eros augue, lacinia vitae neque at, gravida eleifend ligula. Duis viverra hendrerit dictum. Curabitur nec ornare nunc, in dapibus magna.";
        #endregion
    }


    public class Task
    {
        public string TaskName { get; set; }
        public string Description { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
    }

    public class Client
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string PhoneNumbers { get; set; }

        public List<Task> Tasks { get; set; }
    }
}