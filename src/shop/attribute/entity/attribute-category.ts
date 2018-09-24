import {
  Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId,
  PrimaryGeneratedColumn,
} from 'typeorm';

/**
 * 属性分类
 */

@Entity('shop_attribute_category')
export class AttributeCategory {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 60,
    default: '',
    comment: '分类名称',
  })
  name: string;

  @Column('tinyint', {
    default: 1,
    name: '是否启用',
  })
  enabled: number;
}
