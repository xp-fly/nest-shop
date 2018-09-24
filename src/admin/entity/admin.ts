import {
  Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId,
  PrimaryGeneratedColumn
} from 'typeorm';

/**
 * 后台登录用户(商家)
 */

@Entity()
export class Admin {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 10,
    default: '',
    comment: '用户名',
  })
  username: string;

  @Column({
    length: 255,
    default: '',
    comment: '密码',
  })
  password: string;

  @Column({
    length: 255,
    default: '',
    comment: '密码加盐',
  })
  passwordSalt: string;

  @Column({
    length: 60,
    default: '',
    comment: '最后登录IP',
  })
  lastLoginIp: string;

  @Column('int', {
    nullable: false,
    default: 0,
    comment: '最后登录时间',
  })
  lastLoginTime: number;

  @Column('int', {
    default: 0,
    comment: '创建时间',
  })
  addTime: number;

  @Column('int', {
    default: 0,
    comment: '更新时间',
  })
  updateTime: number;

  @Column({
    length: 255,
    default: '',
    name: 'avatar',
    comment: '头像',
  })
  avatar: string;

  @Column('int', {
    default: 0,
    name: '用户角色ID',
  })
  adminRoleId: number;
}
