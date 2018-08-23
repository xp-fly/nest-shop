import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from 'typeorm';


@Entity('shop_user_coupon',{schema:'shop'})
@Index('user_id',['user_id',])
export class shop_user_coupon {

    @Column('mediumint',{
        generated:true,
        nullable:false,
        primary:true,
        name:'id'
        })
    id:number;


    @Column('tinyint',{
        nullable:false,
        default:'0',
        name:'coupon_id'
        })
    coupon_id:number;


    @Column('varchar',{
        nullable:false,
        length:20,
        default:'',
        name:'coupon_number'
        })
    coupon_number:string;


    @Column('int',{
        nullable:false,
        default:'0',
        name:'user_id'
        })
    user_id:number;


    @Column('int',{
        nullable:false,
        default:'0',
        name:'used_time'
        })
    used_time:number;


    @Column('mediumint',{
        nullable:false,
        default:'0',
        name:'order_id'
        })
    order_id:number;

}
