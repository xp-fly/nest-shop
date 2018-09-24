import {
  Index, Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, RelationId,
  PrimaryGeneratedColumn
} from 'typeorm';

/**
 * 属性
 */

@Entity()
export class Attribute {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', {
    default: 0,
    comment: '关联属性分类表, 属性分类ID',
  })
  attribute_category_id: number;

  @Column({
    length: 60,
    default: '',
    comment: '属性名称',
  })
  name: string;

  @Column('tinyint', {
    default: 1,
    comment: '输入类型',
  })
  inputType: number;

  @Column('text', {
    name: 'values',
    comment: '值',
  })
  values: string;

  @Column('tinyint', {
    default: 0,
    comment: '排序方式',
  })
  sortOrder: number;
}
