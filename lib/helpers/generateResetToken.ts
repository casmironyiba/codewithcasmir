import { randomBytes } from 'crypto';

const generateResetToken = (): string => {
  const token = randomBytes(32).toString('hex');
  return token;
};

export default generateResetToken;

