import {
  Repository,
  DeepPartial,
  FindConditions,
  FindManyOptions,
  FindOneOptions,
  Brackets,
  ObjectLiteral,
} from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class EntitySerive<EntityType> {
  protected abstract _repository: Repository<EntityType>;

  async findAll() {
    return await this._repository.findAndCount();
  }

  findOne(filters: Partial<EntityType> | FindOneOptions<EntityType>) {
    return this._repository.findOne(filters);
  }

  findById(id: number) {
    return this._repository.findOne(id);
  }

  create(data: DeepPartial<EntityType>) {
    return this._repository.save(data);
  }

  async update(
    filters: Partial<EntityType> | FindOneOptions<EntityType>,
    data: Partial<EntityType>,
  ): Promise<EntityType> {
    const entity = await this._repository.findOne(filters);
    if (!entity) throw new NotFoundException();
    return this._repository.save({
      ...entity,
      ...data,
    });
  }

  bulkUpdate(
    filters:
      | string
      | Brackets
      | ObjectLiteral
      | ObjectLiteral[]
      | Partial<EntityType>,
    data: QueryDeepPartialEntity<EntityType>,
  ) {
    this._repository
      .createQueryBuilder()
      .update()
      .set(data)
      .where(filters)
      .execute();
  }

  delete(filters: FindConditions<EntityType>) {
    return this._repository.delete(filters);
  }
}
