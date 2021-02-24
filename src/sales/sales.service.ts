import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesEntity } from 'src/database/entity/sales/sales.entity';
import { UserEntity } from 'src/database/entity/user/user.entity';
import { CreateSalesRequest } from 'src/type/create-sales.request';
import { EditSalesRequest } from 'src/type/edit-sales.request';
import { FindOneOptions, Repository } from 'typeorm';
import { StatusEnum } from './enum/sales-status.enum';

@Injectable()
export class SalesService {

  constructor(
    @InjectRepository(SalesEntity)
    private salesRepository: Repository<SalesEntity>,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>
  ) {}

  async createSale(request: CreateSalesRequest): Promise<SalesEntity>{
    const user = await this.findByCpf(request.cpf)

    if(!user){
      throw new BadRequestException('Bad Request', 'Invalid_cpf');
    }

    const sales = new SalesEntity()
    sales.cod = request.cod
    sales.date = request.date
    sales.status =  request.cpf === '15350946056' ? StatusEnum.aprovado : StatusEnum.emValidacao
    sales.user = user
    sales.value = request.value
    return this.salesRepository.save(sales)
  }

  async editSale(saleId: number, request: EditSalesRequest): Promise<void>{
    const sale = await this.findBySale(saleId)
    console.log('saleeeee', sale)
    if (!sale || sale.status ==='aprovado')
    throw new BadRequestException('Bad Request', 'Invalid id or status == aproved');

    await this.salesRepository.update(saleId, request)
  }

  async deleteSale(saleId: number): Promise<void>{
    const sale = await this.findBySale(saleId)
    console.log('saleeeee', sale)
    if (!sale || sale.status ==='aprovado')
    throw new BadRequestException('Bad Request', 'Invalid id or status == aproved');

    await this.salesRepository.delete(saleId)
  }


  async findByCpf(cpf:string, options: FindOneOptions<UserEntity> = {}): Promise<UserEntity>{
    const ormOptions = options;
    ormOptions.where = [
      {
        cpf: cpf,
      },
    ];
    return this.usersRepository.findOne(ormOptions)
  }

  async findBySale(saleId:number, options: FindOneOptions<SalesEntity> = {}): Promise<SalesEntity>{
    const ormOptions = options;
    ormOptions.where = [
      {
        id: saleId,
      },
    ];
    return this.salesRepository.findOne(ormOptions)
  }

}
