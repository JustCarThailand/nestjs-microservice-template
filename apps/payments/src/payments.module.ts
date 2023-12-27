import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { DatabaseModule } from '@app/common';
import { Payments } from './entities/payments.entity';
import { PaymentsRepository } from './payments.repository';

@Module({
  imports: [DatabaseModule, DatabaseModule.forFeature([Payments])],
  controllers: [PaymentsController],
  providers: [PaymentsService, PaymentsRepository],
  exports: [PaymentsService],
})
export class PaymentsModule {}
