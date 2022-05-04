
import { registerAs } from '@nestjs/config';
/**
 * registers the env variables in the nestjs config so that I can perform validation and the like on them.
 */
export default registerAs('palisade', () => ({
  MONGO_URI: process.env.MONGO_URI,
}));