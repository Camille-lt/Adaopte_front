// app/api/animals/route.js
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'; // ou ton client PostgreSQL

const prisma = new PrismaClient();

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type');
  const location = searchParams.get('location');

  const animals = await prisma.animal.findMany({
    where: {
      ...(type && { type: { contains: type, mode: 'insensitive' } }),
      ...(location && { location: { contains: location, mode: 'insensitive' } }),
    },
  });

  return NextResponse.json(animals);
}
