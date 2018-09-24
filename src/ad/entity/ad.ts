import {
  Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * 广告表
 */

@Entity()
export class Ad {

  @PrimaryGeneratedColumn({
    type: 'smallint',
  })
  id: number;

  @Column('smallint', {
    default: 0,
    comment: '关联广告位置表ID',
  })
  adPositionId: number;

  @Column('tinyint', {
    default: 0,
    comment: '媒体类型',
  })
  mediaType: number;

  @Column({
    length: 60,
    default: '',
    comment: '广告名称',
  })
  name: string;

  @Column({
    length: 255,
    default: '',
    comment: '链接',
  })
  link: string;

  @Column('text', {
    comment: '封面地址',
  })
  imageUrl: string;

  @Column({
    length: 255,
    default: '',
    comment: '广告内容',
  })
  content: string;

  @Column('int', {
    default: 0,
    comment: '结束时间',
  })
  endTime: number;

  @Column('tinyint', {
    default: 1,
    comment: '是否启用',
  })
  enabled: number;
}
