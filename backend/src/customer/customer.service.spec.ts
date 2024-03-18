import { Test, TestingModule } from '@nestjs/testing';
import { CustomerService } from './customer.service';
import { PrismaService } from '../prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

describe('CustomerService', () => {
  let service: CustomerService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerService, PrismaService],
    }).compile();

    service = module.get<CustomerService>(CustomerService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a new customer', async () => {
      const createCustomerDto: CreateCustomerDto = {
        name: 'John Doe',
        email: 'john@example.com',
        cpf: '123.456.789-00',
        phone: '1234567890',
        status: 'ativo',
      };

      const expectedResult = {
        id: 6,
        name: 'John Doe',
        email: 'john@example.com',
        cpf: '123.456.789-00',
        phone: '1234567890',
        status: 'ativo',
      };

      jest
        .spyOn(prismaService.customer, 'create')
        .mockResolvedValue(expectedResult);

      const result = await service.create(createCustomerDto);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should return all customers', async () => {
      const expectedResult = [
        {
          id: 6,
          name: 'John Doe',
          email: 'john@example.com',
          cpf: '123.456.789-00',
          phone: '1234567890',
          status: 'ativo',
        },
      ];

      jest
        .spyOn(prismaService.customer, 'findMany')
        .mockResolvedValue(expectedResult);

      const result = await service.findAll();

      expect(result).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a customer by ID', async () => {
      const customerId = 1;
      const expectedResult = {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        cpf: '123.456.789-00',
        phone: '1234567890',
        status: 'ativo',
      };

      jest
        .spyOn(prismaService.customer, 'findUnique')
        .mockResolvedValue(expectedResult);

      const result = await service.findOne(customerId);

      expect(result).toEqual(expectedResult);
    });
  });

  describe('update', () => {
    it('should update a customer', async () => {
      const customerId = 1;
      const updateCustomerDto: UpdateCustomerDto = {
        name: 'Updated Name',
        email: 'updated@example.com',
        cpf: '987.654.321-00',
        phone: '9876543210',
        status: 'inativo',
      };

      const expectedResult = {
        id: 1,
        name: 'Updated Name',
        email: 'updated@example.com',
        cpf: '987.654.321-00',
        phone: '9876543210',
        status: 'inativo',
      };

      jest
        .spyOn(prismaService.customer, 'update')
        .mockResolvedValue(expectedResult);

      const result = await service.update(customerId, updateCustomerDto);

      expect(result).toEqual(expectedResult);
    });
  });
});
