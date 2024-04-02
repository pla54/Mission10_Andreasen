using Mission10API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace Mission10API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingLeagueController : ControllerBase
    {
        private IBowlingLeagueRepository _bowlingLeagueRepository;

        public BowlingLeagueController(IBowlingLeagueRepository temp)
        {
            _bowlingLeagueRepository = temp;
        }

        [HttpGet]
        public IEnumerable<Bowler> Get()
        {
            var bowlerData = _bowlingLeagueRepository.Bowlers
                             .Where(b => b.TeamId == 1 || b.TeamId == 2)
                             .ToArray();

            return bowlerData;
        }



    }
}
