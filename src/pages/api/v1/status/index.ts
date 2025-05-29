import type { NextApiRequest, NextApiResponse } from 'next'

export default function status(request: NextApiRequest, response: NextApiResponse) {
  response.status(200).json({message: "alunos do curso.dev sao pessoas acima da media"})
}