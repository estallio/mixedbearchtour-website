import React, { useState, useEffect, useRef } from 'react'
import fetch from 'node-fetch'
// https://github.com/css-modules/css-modules
import styles from './DeployVercel.css'
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval (callback, delay) {
  const savedCallback = useRef()
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])
  // Set up the interval.
  useEffect(() => {
    function tick () {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
const DeployVercel = () => {
  const [deploying, setDeploying] = useState(false)
  const [jobId, setJobId] = useState(null)
  const [deploymentStarted, setDeploymentStarted] = useState(false)
  const [deployments, setDeployments] = useState([])
  const updateList = () => {
    // https://vercel.com/docs/api?query=api#endpoints/deployments/list-deployments
    console.log(`${process.env.SANITY_STUDIO_DEPLOYED_DOMAIN}/api/getDeployments?secret=${process.env.SANITY_STUDIO_PREVIEW_SECRET}`);
    fetch(`${process.env.SANITY_STUDIO_DEPLOYED_DOMAIN}/api/getDeployments?secret=${process.env.SANITY_STUDIO_PREVIEW_SECRET}`)
    .then(res => res.json())
    .then(json => {
      setDeployments(json.deployments);

      if (deployments.length > 0 && deployments[0]) {
        if (deployments[0].state === "BUILDING") {
          setDeploymentStarted(true);
        } else if (deploymentStarted) {
          setJobId(null);
          setDeploying(false);
        }
      }
    })
  }
  useEffect(() => {
    updateList()
  }, []) // update the list initially
  useInterval(() => {
    if (!jobId) {
      return
    }
    updateList()
  }, 5000)
  const deploy = () => {
    setDeploying(true)
    // https://vercel.com/docs/v2/more/deploy-hooks?query=deploy%20hoo#triggering-a-deploy-hook
    fetch(`${process.env.SANITY_STUDIO_DEPLOYED_DOMAIN}/api/deploy?secret=${process.env.SANITY_STUDIO_PREVIEW_SECRET}`)
    .then(res => res.json())
    .then(json => {
      setJobId(json.job.id)
      updateList()
    })
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>Deploy to Vercel</h2>
      </header>
      <button className={styles.button} type='button' onClick={deploy} disabled={deploying}>
        {deploying ? 'Deploying...' : 'Deploy'}
      </button>
      <ol className={styles.list}>
        {deployments.map(deployment => (
          <li key={deployment.uid}>
            <p>
              {new Date(deployment.created).toLocaleString()} ({deployment.state})
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}
export default DeployVercel
