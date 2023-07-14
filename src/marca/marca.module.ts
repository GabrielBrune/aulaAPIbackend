import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { MarcaController } from "./marca.controller";
import { marcaProviders } from "./marca.provider";
import { MarcaService } from "./marca.service";

@Module({
    imports: [DatabaseModule],
    controllers: [MarcaController],
    providers: [
        ...marcaProviders,
        MarcaService,
    ]
    
})
export class MarcaModule{}