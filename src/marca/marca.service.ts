import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Marca } from "./marca.entity";

@Injectable()
export class MarcaService{
    constructor(
        @Inject('MARCA_REPOSITORY')
        private marcaRepository: Repository<Marca>
    ){}

    async listar(): Promise<Marca[]> {
        return this.marcaRepository.find();
    }

    async listarID(id:string): Promise<Marca>{
        return this.marcaRepository.findOne(id);
    }

    async remover(): Promise<void>{
        return this.marcaRepository.delete();
    }
}