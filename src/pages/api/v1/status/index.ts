import type { NextApiRequest, NextApiResponse } from 'next'
import database from '@/infra/database'

export default async function status(request: NextApiRequest, response: NextApiResponse) {
  const result = await database.query({
    text: 'SELECT 1 + 1 as SUM'
  })

  console.log(result.rows)
  
  response.status(200).json({message: "alunos do curso.dev sao pessoas acima da media"})
}