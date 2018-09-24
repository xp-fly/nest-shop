import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * 用户等级
 */

@Entity()
export class UserLevel {

  @PrimaryGeneratedColumn({
    type: 'tinyint',
  })
  id: number;

  @Column({
    length: 30,
    default: '',
    comment: '等级名称',
  })
  name: string;

  @Column({
    length: 255,
    default: '',
    comment: '描述',
  })
  description: string;

}
