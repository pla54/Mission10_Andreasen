using Microsoft.EntityFrameworkCore;
using Mission10API.Models;

namespace Mission10API.Models
{
    public class EFBowlingLeagueRepository : IBowlingLeagueRepository
    {
        private BowlingLeagueContext _bowlingLeagueContext;
        public EFBowlingLeagueRepository(BowlingLeagueContext temp)
        {
            _bowlingLeagueContext = temp;
        }

        public IEnumerable<Bowler> Bowlers => _bowlingLeagueContext.Bowlers;
    }
}