import { Controller, Delete, Get, Param } from "@nestjs/common";
import { Marca } from "./marca.entity";
import { MarcaService } from "./marca.service";

@Controller('/marca')
export class MarcaController{
    constructor(private readonly marcaServise: MarcaService){    
    }

    @Get('listar')
    async listar(): Promise<Marca[]>{
        return this.marcaServise.listar();
    }

    @Get('ID:id')
    async listarID(@Param('id') id:string): Promise<Marca>{
        return this.marcaServise.localizarID(id);
    }

    @Delete('remove-:id')
    async removerMarca(@Param('id') id: string): Promise<void>{
        this.marcaServise.remover(id);
    }

}