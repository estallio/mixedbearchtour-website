import fetch from 'node-fetch';

export default async function preview(req, res) {
  if (req.query.secret !== process.env.SANITY_PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const deploymentsJson = await fetch(`${process.env.MY_VERCEL_DEPLOY_HOOK}`, {
    method: 'POST'
  }).then(res => res.json());

  res.json(deploymentsJson);
}
