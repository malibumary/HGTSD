import { Router } from 'express'

import relay from './relay'
import mypage from './mypage'

const router = Router()

// Add USERS Routes
router.use(relay)
router.use(mypage)


export default router
