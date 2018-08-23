import {
    Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId,
    PrimaryGeneratedColumn
} from 'typeorm';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn({
        type: 'mediumint',
    })
    id: number;

    @Column({
        nullable: false,
        unique: true,
        length: 60,
        default: '',
    })
    username: string;

    @Column({
        nullable: false,
        length: 32,
        default: '',
    })
    password: string;

    @Column('tinyint', {
        nullable: false,
        default: '0',
        name: 'gender',
    })
    gender: number;

    @Column('int', {
        nullable: false,
        default: '0',
    })
    birthday: number;

    @Column('int', {
        nullable: false,
        default: '0',
    })
    registerTime: number;

    @Column('int', {
        nullable: false,
        default: '0',
    })
    lastLoginTime: number;

    @Column('varchar', {
        nullable: false,
        length: 15,
        default: '',
    })
    lastLoginIp: string;

    @Column('tinyint', {
        nullable: false,
        default: '0',
    })
    userLevelId: number;

    @Column({
        nullable: false,
        length: 60,
    })
    nickname: string;

    @Column({
        nullable: false,
        length: 20,
    })
    mobile: string;

    @Column({
        nullable: false,
        length: 45,
        default: '',
    })
    registerIp: string;

    @Column({
        nullable: false,
        length: 255,
        default: '',
    })
    avatar: string;

    @Column({
        nullable: false,
        length: 50,
        default: '',
    })
    weixinOpenid: string;
}
