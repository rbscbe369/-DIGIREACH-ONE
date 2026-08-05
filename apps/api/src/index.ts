import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

fastify.get('/', async () => {
  return { status: 'ok', message: 'DIGIREACH ONE API' };
});

fastify.get('/health', async () => {
  return { status: 'healthy', uptime: process.uptime() };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3001, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
