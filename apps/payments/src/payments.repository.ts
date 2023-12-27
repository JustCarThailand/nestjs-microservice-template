import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository, User } from '@app/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { Payments } from './entities/payments.entity';

@Injectable()
export class PaymentsRepository extends AbstractRepository<Payments> {
  protected readonly logger = new Logger(PaymentsRepository.name);

  constructor(
    @InjectRepository(Payments)
    paymentsRepository: Repository<Payments>,
    entityManager: EntityManager,
  ) {
    super(paymentsRepository, entityManager);
  }
}
