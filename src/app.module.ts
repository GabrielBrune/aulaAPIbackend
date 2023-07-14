import { Module } from '@nestjs/common';
import { MarcaModule } from './marca/marca.module';
import { ProdutosModule } from './produto/poduto.molude';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [MarcaModule,UsuarioModule,ProdutosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
