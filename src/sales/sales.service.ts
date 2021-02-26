/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, HttpService, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { SalesEntity } from '../database/entity/sales/sales.entity';
import { UserEntity } from '../database/entity/user/user.entity';
import { CreateSalesRequest } from '../type/create-sales.request';
import { EditSalesRequest } from '../type/edit-sales.request';
import { StatusEnum } from './enum/sales-status.enum';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(SalesEntity)
    private salesRepository: Repository<SalesEntity>,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
    private httpService: HttpService
  ) {}

  async createSale(request: CreateSalesRequest): Promise<SalesEntity> {
    const user = await this.findByCpf(request.cpf);

    if (!user) {
      throw new BadRequestException('Bad Request', 'Invalid_cpf');
    }

    const sales = new SalesEntity();
    sales.cod = request.cod;
    sales.date = request.date;
    sales.status =
      request.cpf === '15350946056'
        ? StatusEnum.aprovado
        : StatusEnum.emValidacao;
    sales.user = user;
    sales.value = request.value;
    return this.salesRepository.save(sales);
  }

  async editSale(saleId: number, request: EditSalesRequest): Promise<void> {
    const sale = await this.findBySale(saleId);
    if (!sale || sale.status === 'aprovado')
      throw new BadRequestException(
        'Bad Request',
        'Invalid id or status == aproved'
      );

    await this.salesRepository.update(saleId, request);
  }

  async listSale(cpf: string): Promise<any> {
    const user = await this.findByCpf(cpf);

    if (!user) {
      throw new BadRequestException('Bad Request', 'Invalid_cpf');
    }

    const response = [];
    for (const sale of user.sales) {
      // eslint-disable-next-line no-await-in-loop
      const { percentCashback, cashback } = await this.calcCashback(sale.value);
      response.push({ ...sale, percentCashback, cashback });
    }
    return response;
  }

  async deleteSale(saleId: number): Promise<void> {
    const sale = await this.findBySale(saleId);
    if (!sale || sale.status === 'aprovado')
      throw new BadRequestException(
        'Bad Request',
        'Invalid id or status == aproved'
      );

    await this.salesRepository.delete(saleId);
  }

  async findByCpf(
    cpf: string,
    options: FindOneOptions<UserEntity> = {}
  ): Promise<UserEntity> {
    const ormOptions = options;
    ormOptions.where = [
      {
        cpf,
      },
    ];
    // eslint-disable-next-line no-param-reassign
    options.relations = ['sales'];
    return this.usersRepository.findOne(ormOptions);
  }

  async calcCashback(
    saleValue: number
  ): Promise<{ percentCashback: number; cashback: number }> {
    if (saleValue <= 1000) {
      return { percentCashback: 10, cashback: saleValue * 0.1 };
    }
    if (saleValue > 1500) {
      return { percentCashback: 20, cashback: saleValue * 0.2 };
    }

    return { percentCashback: 15, cashback: saleValue * 0.15 };
  }

  async findBySale(
    saleId: number,
    options: FindOneOptions<SalesEntity> = {}
  ): Promise<SalesEntity> {
    const ormOptions = options;
    ormOptions.where = [
      {
        id: saleId,
      },
    ];
    return this.salesRepository.findOne(ormOptions);
  }

  async accumulatedCashBack(): Promise<any> {
    try {
      const response = await this.httpService
        .get(
          `https://mdaqk8ek5j.execute-api.us-east-1.amazonaws.com/v1/cashback?cpf=12312312323`,
          {
            params: {
              cpf: '12312312323',
            },
            headers: {
              Authorization: `token: ZXPURQOARHiMc6Y0flhRC1LVlZQVFRnm`,
            },
          }
        )
        .toPromise();
      return response.data;
    } catch (error) {
      throw new Error('REQUEST_PROBLEM: accumulatedCashBack');
    }
  }
}
