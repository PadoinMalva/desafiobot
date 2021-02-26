import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwaggerDocumentation } from './swagger/swagger-documentation';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupSwaggerDocumentation(app);
  await app.listen(4010);
}
bootstrap();
