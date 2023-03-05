import { TypegooseModuleOptions } from 'nestjs-typegoose';
import { ConfigService } from '@nestjs/config';
export const getMongoConfig = async (
  ConfigService: ConfigService
): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(ConfigService),
    ...getMongoOptions(),
  };
};

const getMongoString = (ConfigService: ConfigService) =>
  'mongodb://' +
  ConfigService.get('MONGO_LOGIN') +
  ':' +
  ConfigService.get('MONGO_PASSWORD') +
  '@' +
  ConfigService.get('MONGO_HOST') +
  ':' +
  ConfigService.get('MONGO_PORT') +
  '/' +
  ConfigService.get('MONGO_AUTHDATABASE');

const getMongoOptions = () => ({
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
