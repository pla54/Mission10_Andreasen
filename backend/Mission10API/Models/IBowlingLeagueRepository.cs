using Mission10API.Models;

namespace Mission10API.Models
{
    public interface IBowlingLeagueRepository
    {
        IEnumerable<Bowler> Bowlers { get; }
    }
}
