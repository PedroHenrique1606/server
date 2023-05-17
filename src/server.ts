import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

// HTTP METHODS
// GET - MOSTRAR
// POST - CRIAR
// PUT - ATUALIZAR
// PATCH - ATUALIZAR ESPECÍFICO
// DELETE - DELETAR
app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

// API REST

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP running in http://localhost:3333')
  })
