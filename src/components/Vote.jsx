import React, { useState } from 'react';

function Vote() {
  const [selectedElection, setSelectedElection] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState('');

  const elections = [
    { id: 'ELEC001', name: '2024 General Elections', status: 'ongoing' },
    { id: 'ELEC002', name: '2024 Maharashtra State Elections', status: 'upcoming' },
  ];

  const candidates = {
    'ELEC001': [
      { id: 'C001', name: 'Rahul Singh', description: 'Running for MP in General Elections' },
      { id: 'C002', name: 'Meena Iyer', description: 'Running for MP in General Elections' },
    ],
    'ELEC002': [
      { id: 'C003', name: 'Ajay Thakur', description: 'Running for MLA in Maharashtra' },
      { id: 'C004', name: 'Shalini Gupta', description: 'Running for MLA in Maharashtra' },
    ],
  };

  const handleVote = () => {
    if (selectedElection && selectedCandidate) {
      // TODO: Implement actual voting logic
      alert(`Vote cast for ${selectedCandidate} in ${selectedElection}`);
    } else {
      alert('Please select both an election and a candidate');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Vote</h2>
      <div className="mb-4">
        <label htmlFor="election" className="block mb-1">Select Election</label>
        <select
          id="election"
          className="select select-bordered w-full"
          value={selectedElection}
          onChange={(e) => setSelectedElection(e.target.value)}
        >
          <option value="">Select an election</option>
          {elections.map((election) => (
            <option key={election.id} value={election.id} disabled={election.status !== 'ongoing'}>
              {election.name} ({election.status})
            </option>
          ))}
        </select>
      </div>
      {selectedElection && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Candidates</h3>
          {candidates[selectedElection].map((candidate) => (
            <div key={candidate.id} className="flex items-center mb-2">
              <input
                type="radio"
                id={`candidate-${candidate.id}`}
                name="candidate"
                value={candidate.id}
                onChange={() => setSelectedCandidate(candidate.name)}
                className="radio radio-primary"
              />
              <label htmlFor={`candidate-${candidate.id}`} className="ml-2">
                <span className="font-medium">{candidate.name}</span>
                <span className="text-sm text-gray-600 block">{candidate.description}</span>
              </label>
            </div>
          ))}
        </div>
      )}
      <button onClick={handleVote} className="btn btn-primary mt-4 w-full" disabled={!selectedElection || !selectedCandidate}>
        Submit Vote
      </button>
    </div>
  );
}

export default Vote;