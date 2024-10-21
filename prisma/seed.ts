// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

// initialize Prisma Client
const prisma = new PrismaClient();
const roundsOfHashing = 10;

async function main() {
  // create two dummy users
  const password1 = await bcrypt.hash('(e04095EA)', roundsOfHashing);
  const password2 = await bcrypt.hash('(e04095EA)', roundsOfHashing);

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

  const stat1a = await prisma.stat.create({
    data: {
      num: 12,
      text: 'Years of Experience',
      userId: user1.id,
    },
  });
  const stat1b = await prisma.stat.create({
    data: {
      num: 10,
      text: 'Projects Completed',
      userId: user1.id,
    },
  });
  const stat1c = await prisma.stat.create({
    data: {
      num: 8,
      text: 'Technologies Mastered',
      userId: user1.id,
    },
  });
  const stat1d = await prisma.stat.create({
    data: {
      num: 10,
      text: 'Code Commits',
      userId: user1.id,
    },
  });
  const user2 = await prisma.user.upsert({
    where: { email: 'moeez@gmail.com' },
    update: {},
    create: {
      name: 'Moeez Ahmed',
      email: 'moeez@gmail.com',
      designation: 'Software Engineer',
      contact: '03001234567',
      description:
        "Hey! Moeez Ahmed here! Share that today's Prisma ORM release adds stable support for MongoDB!",
      password: password2,
    },
  });

  const social2 = await prisma.social.upsert({
    where: { userId: user2.id },
    update: {
      userId: user2.id,
    },
    create: {
      github: 'github.com/Moeez',
      linkedin: 'linkedin.com',
      instagram: 'instagram.com',
      userId: user2.id,
    },
  });

  const stat2a = await prisma.stat.create({
    data: {
      num: 2,
      text: 'Years of Experience',
      userId: user2.id,
    },
  });
  const stat2b = await prisma.stat.create({
    data: {
      num: 8,
      text: 'Projects Completed',
      userId: user2.id,
    },
  });
  const stat2c = await prisma.stat.create({
    data: {
      num: 7,
      text: 'Technologies Mastered',
      userId: user2.id,
    },
  });
  const stat2d = await prisma.stat.create({
    data: {
      num: 50,
      text: 'Code Commits',
      userId: user2.id,
    },
  });
  // create two dummy articles

  console.log(
    'Haseeb Ahmed: ===>' + { user1, social1, stat1a, stat1b, stat1c, stat1d },
  );
  console.log(
    'Moeez Ahmed: ===>' + { user2, social2, stat2a, stat2b, stat2c, stat2d },
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
