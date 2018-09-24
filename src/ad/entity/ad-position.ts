import {
  Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId,
  PrimaryGeneratedColumn
} from 'typeorm';

/**
 * 广告位置
 */

@Entity()
export class AdPosition {
  @PrimaryGeneratedColumn({
    type: 'tinyint',
  })
  id: number;

  @Column({
    length: 60,
    default: '',
    comment: '名称',
  })
  name: string;

  @Column('smallint', {
    default: 0,
    comment: '宽度',
  })
  width: number;

  @Column('smallint', {
    default: '0',
    comment: '高度',
  })
  height: number;

  @Column({
    length: 255,
    default: '',
    comment: '描述',
  })
  desc: string;
}
