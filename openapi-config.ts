import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
    schemaFile: './src/shared/api/openapi.yaml',
    apiFile: './src/shared/api/api.ts',
    hooks: {
        queries: true,
        lazyQueries: true,
        mutations: true
    },
    outputFile: "./src/shared/api/query.ts",
}

export default config
