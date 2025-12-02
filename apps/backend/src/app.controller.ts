import { Controller, Get, Inject } from "@nestjs/common"
import { AppService } from "~/app.service"
import { AppTokens } from "~/app.tokens"

@Controller()
export class AppController {
    constructor(@Inject(AppTokens.AppService) private readonly appService: AppService) {}

    @Get()
    get(): string {
        return this.appService.get()
    }
}
