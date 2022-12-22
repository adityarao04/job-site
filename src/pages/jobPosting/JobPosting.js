import React, { useState, useEffect } from 'react'
import './jobpPosting.scss'
import JobPostingCard from '../../components/jobPostingCard/JobPostingCard';
export default function JobPosting() {

    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState({});
    const [error, setError] = useState(null);
    const [ currentPage , setCurrentPage ] = useState(1);
   console.log("states", jobs, error);

    const getJobs = async() =>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNxdWFyZWJvYXRAZ21haWwuY29tIiwibmFtZSI6IlJlY3J1aXRlciIsInNraWxscyI6InB5dGhvbiIsInVzZXJSb2xlIjowLCJjcmVhdGVkQXQiOiIyMDIxLTEyLTIyVDEwOjUxOjEzLjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTEyLTIyVDExOjEwOjAyLjAwMFoiLCJpZCI6IjFmMmEzNjYxLTFjM2QtNGIwZi04ZWM0LTE5ZjUzM2ZiOTBmMiIsImlhdCI6MTY0NTQzOTg3M30.xKo_bIJKoCbYDRdcrMKEBv0_Qjt9q2kFqwSBcMK0Jwo");
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        const response = fetch(`https://jobs-api.squareboat.info/api/v1/recruiters/jobs?page=${currentPage}`, requestOptions)
          .then(response => response.text())
          .then(result => {console.log(result);
            setJobs(JSON.parse(result).data.data)
        setLoading(false);
        })
          .catch(error => console.log('error', error));
    };


useEffect(() => {
   getJobs();
}, [currentPage]);

  if(loading){
    return (
        <div>loading...</div>
      )
  }
  return (
    <div className='jobPosting container'>
<div className="JobPostingContainer">
        {jobs.map((job, idx) => <JobPostingCard key={idx} id={job?.id} description={job?.description} location={job?.location} title={job?.title}/>)}</div>
<div className="pageCounter">
    <div className="pageCounter__decrease" onClick={() => setCurrentPage(prev=> prev - 1)}>-</div>
    {currentPage}
    <div className="pageCounter__increase" onClick={() => setCurrentPage(prev=> prev + 1)}>+</div>
</div>
</div>
  )
}
