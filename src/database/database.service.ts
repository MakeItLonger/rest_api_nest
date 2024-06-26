import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/edge';

@Injectable()
export class DatabaseService extends PrismaClient {
  async onOnModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit' as never, async () => {
      await app.close();
    });
  }
}
