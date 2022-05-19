
import { registerAs } from '@nestjs/config';
/**
 * registers the env variables in the nestjs config so that I can perform validation and the like on them.
 */
export default registerAs('palisade', () => ({
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  JWT_EXPIRATION_TIME: process.env.JWT_EXPIRATION_TIME,

}));