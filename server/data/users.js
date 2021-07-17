import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin user',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 12),
    isAdmin: true,
  },
  {
    name: 'Anis halleb',
    email: 'anis@gmail.com',
    password: bcrypt.hashSync('123456', 12),
  },
  {
    name: 'Faten fotfot',
    email: 'faten@gmail.com',
    password: bcrypt.hashSync('123456', 12),
  },
];

export default users;
