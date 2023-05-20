import { PrismaClient } from '@prisma/client'
import { invitees } from './invitees-array'
const prisma = new PrismaClient()
async function main() {

  const seedAll = invitees.map((d) => {
    const slug = d.replace(/\s+/g, '-').toLowerCase()
    return prisma.invitees.upsert({
      where: { slug: slug },
      update: {},
      create: {
        slug: slug,
        name: d
      }
    })
  })

  await Promise.all(seedAll)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })