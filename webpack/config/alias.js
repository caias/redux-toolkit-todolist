/**
 * @author caias
 * webpack alias config set
 */
import { join } from 'path';
import { ROOT_PATH } from './env';

export const alias = {
  '@src': join(ROOT_PATH, 'src'),
  '@pages': join(ROOT_PATH, 'src/pages'),
  '@features': join(ROOT_PATH, 'src/features'),
  '@components': join(ROOT_PATH, 'src/components'),
};