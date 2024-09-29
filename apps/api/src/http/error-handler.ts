import type { FastifyInstance } from 'fastify'
import { ZodError } from 'zod'

import { BadRequestError } from '@/http/routes/_errors/bad-request-error'
import { UnauthorizedError } from '@/http/routes/_errors/unauthorized-error'

type FastifyErrorHandler = FastifyInstance['errorHandler']

export const errorHandler: FastifyErrorHandler = (error, request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Validation error',
      errors: error.flatten().fieldErrors,
    })
  }

  if (error.validation) {
    return reply.status(400).send({
      message: 'Validation error',
      errors: error.validation.map((err) => err.params.issue),
    })
  }

  if (error instanceof BadRequestError) {
    return reply.status(400).send({
      message: error.message,
    })
  }

  if (error instanceof UnauthorizedError) {
    return reply.status(401).send({
      message: error.message,
    })
  }

  console.error(error)
  console.error(error instanceof ZodError)

  // send error to some observability platform

  return reply.status(500).send({ message: 'Internal server error' })
}
