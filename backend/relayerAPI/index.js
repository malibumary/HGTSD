import { Router } from 'express'

import relay from './relayapi'
import mypage from './mypageapi'

const router = Router()

// Add USERS Routes
router.use(relay)
router.use(mypage)


export default router
