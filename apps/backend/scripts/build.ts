// NOTE This is unused for now

import { $, build } from "bun"

await $`rm -rf dist`

const optionalRequirePackages = [
    "class-transformer",
    "class-validator",
    "@nestjs/microservices",
    "@nestjs/websockets",
    "@fastify/static"
]

const result = await build({
    entrypoints: ["./src/main.ts"],
    outdir: "./dist",
    target: "bun",
    external: optionalRequirePackages.filter((pkg) => {
        try {
            require(pkg)
            return false
        } catch {
            return true
        }
    }),
    minify: {
        syntax: true,
        whitespace: true
    },
    splitting: true
})

if (!result.success) {
    console.log(result.logs[0])
    process.exit(1)
}

console.log("Built successfully!")
