import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerOrder } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { Product } from '../products/entities/product.entity';
import { Client } from '../clients/entities/client.entity';
import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';

@Module({
imports: [TypeOrmModule.forFeature([CustomerOrder, OrderItem, Product, Client])],
controllers: [OrdersController], providers: [OrdersService],
}) export class OrdersModule {}
