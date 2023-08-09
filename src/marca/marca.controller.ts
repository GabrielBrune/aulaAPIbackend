import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { RetornoCadastroDTO } from "src/dto/retorno.dto";
import { CriarMarcaDTO } from "./dto/marca.dto";
import { MARCA } from "./marca.entity";
import { MarcaService } from "./marca.service";

@Controller('/marca')
export class MarcaController{
    constructor(private readonly marcaServise: MarcaService){    
    }

    @Get('listar')
    async listar(): Promise<MARCA[]>{
        return this.marcaServise.listar();
    }

    @Get('ID:id')
    async listarID(@Param('id') id:string): Promise<MARCA>{
        return this.marcaServise.listarID(id);
    }

    @Post('')
    async criaMarca(@Body()dados:CriarMarcaDTO): Promise<RetornoCadastroDTO>{
        return this.marcaServise.Inserir(dados);
    }

    @Delete('remove-:id')
    async removerMarca(@Param('id') id: string): Promise<void>{
        this.marcaServise.remover(id);
    }

}