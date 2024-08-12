import { useState } from 'react';


function App() {
    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState([]);

    const handleSubmit = () => {
        // setJobs(prev =>{
        //   return newJobs;
        // } );
        // setJob('');
    };

    return (
        <div className="App">
            <input value={job} onChange={(e) => setJob(e.target.value)} />

            <button onClick={handleSubmit}>Add</button>

            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
