// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

// initialize Prisma Client
const prisma = new PrismaClient();
const roundsOfHashing = 10;

async function main() {
  // create two dummy users
  const password1 = await bcrypt.hash('(e04095EA)', roundsOfHashing);

  const user1 = await prisma.user.upsert({
    where: { email: 'hbmz4812@gmail.com' },
    update: {},
    create: {
      name: 'Haseeb Ahmed',
      email: 'hbmz4812@gmail.com',
      designation: 'Software Engineer',
      contact: '03001234567',
      description:
        "Hey! Haseeb Ahmed here! Share that today's Prisma ORM release adds stable support for MongoDB!",
      password: password1,
      stats: [
        {
          id: 1,
          num: 8,
          text: 'Technologies Mastered',
        },
        {
          id: 2,
          num: 12,
          text: 'Years of Experience',
        },
        { 
          id: 3,
          num: 10,
          text: 'Projects Completed',
        },
        {
          id: 4,
          num: 50,
          text: 'Code Commits',
        },
      ]
    },
  });

  const social1 = await prisma.social.upsert({
    where: { userId: user1.id },
    update: {
      userId: user1.id,
    },
    create: {
      github: 'github.com/Haseeb',
      linkedin: 'linkedin.com/Haseeb',
      instagram: 'instagram.com/Haseeb',
      userId: user1.id,
    },
  });


  console.log(
    'Haseeb Ahmed: ===>' + { user1, social1 },
  );
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
