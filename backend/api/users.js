import { Router } from 'express'

const router = Router()

// Mock Users
const users = [
  { name: '알렉산드라' },
  { name: '푸야' },
  { name: '세바스찬' },
]

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users)
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

export default router
