import { Module } from "@nestjs/common"
import { AppController } from "~/app.controller"
import { AppService } from "~/app.service"
import { AppTokens } from "~/app.tokens"

@Module({
    imports: [],
    controllers: [AppController],
    providers: [{ provide: AppTokens.AppService, useClass: AppService }]
})
export class AppModule {}
