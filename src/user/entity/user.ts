import {
  Entity, Column, PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * 用户表
 */

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'mediumint',
  })
  id: number;

  @Column({
    unique: true,
    length: 60,
    default: '',
    comment: '用户姓名',
  })
  username: string;

  @Column({
    length: 32,
    default: '',
    comment: '密码',
  })
  password: string;

  @Column('tinyint', {
    default: '0',
    name: 'gender',
    comment: '性别',
  })
  gender: number;

  @Column('int', {
    default: '0',
    comment: '生日',
  })
  birthday: number;

  @Column('int', {
    default: '0',
    comment: '注册时间',
  })
  registerTime: number;

  @Column('int', {
    default: '0',
    comment: '最后登录时间',
  })
  lastLoginTime: number;

  @Column('varchar', {
    length: 15,
    default: '',
    comment: '最后登录IP',
  })
  lastLoginIp: string;

  @Column('tinyint', {
    default: '0',
    comment: '用户等级ID，关联用户等级表',
  })
  userLevelId: number;

  @Column({
    length: 60,
    comment: '别名',
  })
  nickname: string;

  @Column({
    length: 20,
    comment: '手机号',
  })
  mobile: string;

  @Column({
    length: 45,
    default: '',
    comment: '注册IP',
  })
  registerIp: string;

  @Column({
    length: 255,
    default: '',
    comment: '头像',
  })
  avatar: string;

  @Column({
    length: 50,
    default: '',
    comment: '微信Id',
  })
  weixinOpenid: string;
}
