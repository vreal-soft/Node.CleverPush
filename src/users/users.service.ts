import { Injectable } from '@nestjs/common';
import { EntitySerive } from 'src/common/abstracts/entity-service.abstract';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService extends EntitySerive<User> {
  constructor(
    @InjectRepository(User)
    protected readonly _repository: Repository<User>,
  ) {
    super();
  }
}
