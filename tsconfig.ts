import fs from 'node:fs'
import path from 'node:path'
import tsconfig from './src/index.js'

const NOTICE = `
// https://github.com/gimjb/tsconfig
// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
`.trimStart()

function serialize(obj: Record<string, unknown>): string {
	return NOTICE + JSON.stringify(obj, (key, value) => {
		if (Array.isArray(value)) {
			return value.sort()
		}
		
		return value
	}, 2)
}

fs.writeFileSync(path.join(__dirname, 'tsconfig.node.json'), serialize(tsconfig))
fs.writeFileSync(path.join(__dirname, 'tsconfig.browser.json'), serialize({
	...tsconfig,
	compilerOptions: { ...tsconfig.compilerOptions, module: 'ESNext' },
}))
