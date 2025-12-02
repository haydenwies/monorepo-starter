import { Injectable } from "@nestjs/common"
import { add } from "@repo/example/ui"

@Injectable()
export class AppService {
    get(): string {
        const a = Math.floor(Math.random() * 100)
        const b = Math.floor(Math.random() * 100)

        const res = add(a, b)
        return `${a} + ${b} = ${res}`
    }
}
