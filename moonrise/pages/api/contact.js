const handler = (req, res) => {
  // console.log(req.body)
  if (req.method === 'POST') {
    const data = req.body
    
  }
  return res.status(400).json({ message: 'Bad request' });
}