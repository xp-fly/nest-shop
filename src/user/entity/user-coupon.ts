import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

/**
 * 用户-优惠券
 */

@Entity()
export class UserCoupon {

  @PrimaryGeneratedColumn({
    type: 'mediumint',
  })
  id: number;

  @Column('tinyint', {
    default: '0',
    comment: '优惠券Id',
  })
  couponId: number;

  @Column({
    length: 20,
    default: '',
    comment: '优惠券编号',
  })
  couponNumber: string;

  @Column('int', {
    default: 0,
    comment: '用户ID',
  })
  userId: number;

  @Column('int', {
    default: 0,
    comment: '使用时间',
  })
  usedTime: number;

  @Column('mediumint', {
    default: 0,
    comment: '订单Id',
  })
  order_id: number;
}
