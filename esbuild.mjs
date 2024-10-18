import * as esbuild from "esbuild"

await esbuild.build({
    entryPoints: ["src/main.ts"],
    outfile: "out/bundle.js",
    tsconfig: "tsconfig.json",

    platform: "node",

    bundle: true,
    minify: true,
    ignoreAnnotations: true


})