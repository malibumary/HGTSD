import { Router } from 'express'

import relay from './relayapi'

const router = Router()

// Add USERS Routes
router.use(relay)

export default router
