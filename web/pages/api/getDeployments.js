import fetch from 'node-fetch';

export default async function preview(req, res) {
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
