import express from 'express'

const app = express()

app.use(express.json());

app.post('/', handleApiRoute)
app.use((req, res) => { return res.status(404).json({ message: 'not found' }) })


app.listen(4000, () => { console.log('LISTENING on port 4000') })

function handleApiRoute(req, res) {
  console.log(req.body)
  const { user, pass } = req.body
  if (user == 'joana') {
    return res.send('Ok')
  } else {
    return res.send('No')
  }

}