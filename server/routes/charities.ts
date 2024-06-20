import { Router } from 'express'
// import checkJwt, { JwtRequest } from '../auth0.ts'
// import { StatusCodes } from 'http-status-codes'
import * as db from '../db/charities.ts'
import checkJwt, { JwtRequest } from '../auth0.ts'
import { StatusCodes } from 'http-status-codes'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const result = await db.getAllCharities()
    res.json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ errorMessage: 'Something went wrong' })
  }
})

router.get('/:charitySlug', async (req, res, next) => {
  const slug = req.params.charitySlug
  try {
    const result = await db.getCharityBySlug(slug)
    res.json(result)
  } catch (error) {
    next(error)
  }
})

router.get('/donor/:id', checkJwt, async (req: JwtRequest, res, next) => {
  if (!req.auth?.sub) {
    res.sendStatus(StatusCodes.UNAUTHORIZED)
    return
  }
  try {
    const result = await db.getAllCharitiesByDonorFollowing(
      Number(req.params.id),
    )
    res.json(result)
  } catch (e) {
    next(e)
  }
})

router.delete(
  '/donor/:id/:charityid',
  checkJwt,
  async (req: JwtRequest, res, next) => {
    if (!req.auth?.sub) {
      res.sendStatus(StatusCodes.UNAUTHORIZED)
      return
    }
    try {
      const charityID = Number(req.params.charityid)
      const donorId = Number(req.params.id)
      await db.deleteCharitiesByDonorFollowing(charityID, donorId)
      res.sendStatus(204)
    } catch (error) {
      next(error)
    }
  },
)

// router.post('/', checkJwt, async (req: JwtRequest, res, next) => {
//   if (!req.auth?.sub) {
//     res.sendStatus(StatusCodes.UNAUTHORIZED)
//     return
//   }

//   try {
//     const { categoryId, name, phone, email } = req.body
//     const id = await db.addCharities({ categoryId, name, phone, email })
//     res
//       .setHeader('Location', `${req.baseUrl}/${id}`)
//       .sendStatus(StatusCodes.CREATED)
//   } catch (err) {
//     next(err)
//   }
// })

export default router
