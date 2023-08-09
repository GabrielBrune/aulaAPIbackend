import { IsNotEmpty, IsString } from "class-validator";

export class CriarMarcaDTO{
    @IsString()
    @IsNotEmpty({message:'nome nao pode ser vazio'})
    nome:string
}