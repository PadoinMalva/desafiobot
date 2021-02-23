import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { setupSwaggerDocumentation } from './swagger/swagger-documentation';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupSwaggerDocumentation(app)
  // SwaggerModule.setup('api', app, document);
  await app.listen(4010);
}
bootstrap();
