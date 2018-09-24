import {
  Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * 收货地址
 */

@Entity()
export class Address {

  @PrimaryGeneratedColumn({
    type: 'mediumint',
  })
  id: number;

  @Column({
    length: 50,
    default: '',
    comment: '姓名',
  })
  name: string;

  @Column('mediumint', {
    default: 0,
    comment: '用户ID',
  })
  userId: number;

  @Column('smallint', {
    nullable: false,
    default: 0,
    comment: '国家ID',
  })
  countryId: number;

  @Column('smallint', {
    default: 0,
    comment: '省份ID',
  })
  provinceId: number;

  @Column('smallint', {
    default: 0,
    comment: '城市ID',
  })
  city_id: number;

  @Column('smallint', {
    default: 0,
    comment: '区域/行政区',
  })
  districtId: number;

  @Column({
    length: 120,
    default: '',
    comment: '地址',
  })
  address: string;

  @Column('varchar', {
    length: 60,
    default: '',
    comment: '手机号码',
  })
  mobile: string;

  @Column('tinyint', {
    default: 0,
    comment: '是否默认',
  })
  isDefault: number;
}
