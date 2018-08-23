import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId} from 'typeorm';


@Entity('shop_user_level',{schema:'shop'})
export class shop_user_level {

    @Column('tinyint',{
        generated:true,
        nullable:false,
        primary:true,
        name:'id'
        })
    id:number;


    @Column('varchar',{
        nullable:false,
        length:30,
        default:'',
        name:'name'
        })
    name:string;


    @Column('varchar',{
        nullable:false,
        length:255,
        default:'',
        name:'description'
        })
    description:string;

}
