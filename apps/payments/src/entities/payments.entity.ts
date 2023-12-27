import { AbstractEntity } from '@app/common';
import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity()
export class Payments extends AbstractEntity<Payments> {
  @Column({ name: 'card_name' })
  cardName: string;

  @Column({ name: 'card_expire_date', type: 'timestamptz' })
  cardExpireDate: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
