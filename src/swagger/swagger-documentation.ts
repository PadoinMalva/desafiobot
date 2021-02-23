import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

function apiDocument(app: INestApplication) {
  return SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('Boticario API')
      .setDescription('Desafio Boticario API')
      .setVersion('1.0')
      .addBearerAuth()
      .build(),
  )};

  export function setupSwaggerDocumentation(app: INestApplication) {
    const completePath = (path?: string) =>
      `api-documentation${path ? '/' + path : ''}`;
  
 
  
    SwaggerModule.setup('api', app, apiDocument(app));
  }
  