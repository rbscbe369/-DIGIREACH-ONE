import { FastifyInstance } from 'fastify';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { jsonSchemaTransform } from 'fastify-type-provider-zod';

export async function configureOpenApi(app: FastifyInstance) {
  await app.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Identity & Access API',
        description: 'DIGIREACH ONE - Identity & Access Capability REST API',
        version: '1.0.0'
      },
      servers: [
        {
          url: 'http://localhost:3000/api/v1/identity',
          description: 'Development server'
        }
      ],
      tags: [
        { name: 'Users', description: 'User management' },
        { name: 'Organizations', description: 'Organization management' },
        { name: 'Workspaces', description: 'Workspace management' },
        { name: 'Sessions', description: 'Session management' },
        { name: 'Roles', description: 'Role management' },
        { name: 'Permissions', description: 'Permission management' }
      ]
    },
    transform: jsonSchemaTransform
  });

  await app.register(fastifySwaggerUi, {
    routePrefix: '/documentation',
    uiConfig: {
      docExpansion: 'full',
      deepLinking: false
    }
  });
}
