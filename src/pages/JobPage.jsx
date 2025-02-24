// import React from 'react'
// import {useState, useEffect} from 'react'
// import { useParams } from 'react-router-dom';
// import Spinner from '../components/Spinner';

// const JobPage = () => {
//   const { id } = useParams();
//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJob = async () => {
//         try {
//             const res = await fetch(`/api/jobs/${id}`)
//             const job = await res.json()
//             setJob(job)``
//           } catch (error) {
//             console.error('Error Fetching Data', error)
//           } finally {
//             setLoading(false)
//           }
    
//     }

//     fetchJob()
//   }, [])

//   return loading ? <Spinner />  : (
//     <div>{ job.title }</div>
//   )
// }

// export default JobPage


import React from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const JobPage = () => {
  const { id } = useParams();


  return loading ? <Spinner /> : (
    <div>JobPage</div>
  )
}

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`)
    const job = await res.json()
    return job
}

export default JobPage