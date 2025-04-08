// Copyright (c) 2025 DB-Thor<db912356847@gmail.com>
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import { camelCase, upperFirst } from 'es-toolkit'
import { closeSync, openSync, readdirSync, statSync, writeSync } from 'fs'
import { join } from 'path'
export default (dirPath: string, inputFilePath: string, exportsPathPrefix: string = '.') => {
    try {
        let fileContent = ''
        const dirs = readdirSync(dirPath)?.filter?.((item) =>
            statSync(join(dirPath, item))?.isDirectory()
        )

        dirs?.forEach?.((dirname) => {
            fileContent += `
                export * from '${exportsPathPrefix}/${dirname}';
                export { default as ${upperFirst(
                    camelCase(dirname)
                )} } from '${exportsPathPrefix}/${dirname}';
            `
        })

        fileContent = fileContent.replace(/^\s+/gm, '')
        const file = openSync(inputFilePath, 'w')
        writeSync(file, fileContent)
        closeSync(file)
    } catch (error) {}
}
