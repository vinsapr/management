'use strict'

module.exports = {
  enable: true,
  specUrl: '/swagger.json',

  options: {
    swaggerDefinition: {
      info: {
        title: 'HR - Management with swagger docs',
        version: '1.0.0',
        description: 'For Technical Test Back End Purpose',
      },

      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },

      basePath: '/',

      securityDefinitions: {
        bearerAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization',
        },
      },
    },

    apis: ['app/**/*.ts', 'docs/swagger/**/*.yml', 'start/routes.ts'],
  },
}
