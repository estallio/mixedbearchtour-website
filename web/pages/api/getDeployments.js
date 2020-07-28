import fetch from 'node-fetch';

export default async function preview(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  // another option
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, origin, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const deploymentsJson = await fetch(
    `https://api.vercel.com/v5/now/deployments?limit=5&projectId=${process.env.MY_VERCEL_PROJECT_ID}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.MY_VERCEL_TOKEN}`
      }
    }
  ).then(res => res.json());

  res.json(deploymentsJson);
}
