import React, { useState } from 'react';

function CreateElection() {
  const [electionName, setElectionName] = useState('');
  const [category, setCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [candidates, setCandidates] = useState(['', '']);

  const categories = [
    { id: 'CAT001', name: 'General Elections' },
    { id: 'CAT002', name: 'State Elections' },
  ];

  const handleAddCandidate = () => {
    setCandidates([...candidates, '']);
  };

  const handleCandidateChange = (index, value) => {
    const newCandidates = [...candidates];
    newCandidates[index] = value;
    setCandidates(newCandidates);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement create election logic
    console.log('Creating election:', { electionName, category, startDate, endDate, candidates });
    alert('Election created successfully!');
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Create New Election</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="electionName" className="block mb-1">Election Name</label>
          <input
            type="text"
            id="electionName"
            value={electionName}
            onChange={(e) => setElectionName(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="category" className="block mb-1">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full"
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="startDate" className="block mb-1">Start Date</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block mb-1">End Date</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block mb-1">Candidates</label>
          {candidates.map((candidate, index) => (
            <input
              key={index}
              type="text"
              value={candidate}
              onChange={(e) => handleCandidateChange(index, e.target.value)}
              className="input input-bordered w-full mb-2"
              placeholder={`Candidate ${index + 1}`}
              required
            />
          ))}
          <button type="button" onClick={handleAddCandidate} className="btn btn-secondary btn-sm">
            Add Candidate
          </button>
        </div>
        <button type="submit" className="btn btn-primary w-full">Create Election</button>
      </form>
    </div>
  );
}

export default CreateElection;