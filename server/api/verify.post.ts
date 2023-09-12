import { verifyAuthenticationResponse } from '@simplewebauthn/server'

export default defineEventHandler(async (event) => {
  const storage = useStorage('data')

  const body = await readBody(event)

  if (!body.userID)
    throw new Error('Invalid request')

  if (!await storage.hasItem(body.userID))
    throw new Error('No registration found')

  const options = await storage.getItem<string>(body.userID)

  const verification = await verifyAuthenticationResponse({
    response: body,
    expectedChallenge: options!,
    expectedOrigin: origin,
    expectedRPID: 'https://headcount.qinguan.me',
  })

  return verification
})
