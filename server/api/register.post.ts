import {
  generateRegistrationOptions,
} from '@simplewebauthn/server'

export default defineEventHandler(async (event) => {
  const storage = useStorage('data')

  const body = await readBody(event)

  if (!body.userName || !body.userID)
    throw new Error('Invalid request')

  const options = await generateRegistrationOptions({
    rpName: 'Headcount',
    userID: body.userID,
    userName: body.userName,
    attestationType: 'direct',
  })

  await storage.setItem(body.userID, options.challenge)

  return options
})
