import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";

@Module({
    imports: [DatabaseModule],
    providers: [
        ...marcaProviders,
        MarcaService,
    ],
})
export class MarcaModule{}