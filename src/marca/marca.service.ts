import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CriarMarcaDTO } from "./dto/marca.dto";
import { MARCA } from "./marca.entity";
import { v4 as uuid } from 'uuid';
import { RetornoCadastroDTO } from "src/dto/retorno.dto";


@Injectable()
export class MarcaService{
    constructor(
        @Inject('MARCA_REPOSITORY')
        private marcaRepository: Repository<MARCA>
    ){}

    async Inserir(dados:CriarMarcaDTO): Promise<RetornoCadastroDTO>{
        let marca = new MARCA();
            marca.ID = uuid();
            marca.NOME = dados.nome;

        return this.marcaRepository.save(marca)
        .then((result)=>{
            return <RetornoCadastroDTO>{
                id: marca.ID,
                message:"Marca Cadastrada"
            };
        })
        .catch((error) => {
            return <RetornoCadastroDTO>{
                id: "",
                message: "Houve um erro ao cadastrar."
            };
        })

    }
    

    async listar(): Promise<MARCA[]> {
        return this.marcaRepository.find();
    }

    async listarID(ID:string): Promise<MARCA>{
        return this.marcaRepository.findOne({
            where:{
                ID,
            },
        });
    }

    async remover(ID: string): Promise<void>{
        const marca = await this.listarID(ID);
        await this.marcaRepository.delete(marca);
    }
}