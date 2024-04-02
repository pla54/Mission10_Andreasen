import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';

function BowlingLeagueList() {
  const [Data, setData] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchBowlingLeagueData = async () => {
      const rsp = await fetch('http://localhost:5282/BowlingLeague');
      const b = await rsp.json();
      setData(b);
    };
    fetchBowlingLeagueData();
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center">Bowlers Information </h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Bowler ID</th>
            <th>Team Name</th>
            <th>First Name</th>
            <th>Middle Initial</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((b) => (
            <tr key={b.bowlerId}>
              <td>{b.bowlerId}</td>
              <td>
                {b.teamId === 1
                  ? 'Marlins'
                  : b.teamId === 2
                    ? 'Sharks'
                    : 'Unknown'}
              </td>
              <td>{b.bowlerFirstName}</td>
              <td>{b.bowlerMiddleInit}</td>
              <td>{b.bowlerLastName}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlingLeagueList;
