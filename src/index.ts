import backwardsCompatibility from './compilerOptions/backwardsCompatibility.js'
import compilerDiagnostics from './compilerOptions/compilerDiagnostics.js'
import editorSupport from './compilerOptions/editorSupport.js'
import emit from './compilerOptions/emit.js'
import interopConstraints from './compilerOptions/interopConstraints.js'
import javascriptSupport from './compilerOptions/javascriptSupport.js'
import languageAndEnvironment from './compilerOptions/languageAndEnvironment.js'
import modules from './compilerOptions/modules.js'
import outputFormatting from './compilerOptions/outputFormatting.js'
import projects from './compilerOptions/projects.js'
import typeChecking from './compilerOptions/typeChecking.js'
import completeness from './compilerOptions/completeness.js'
import watchOptions from './compilerOptions/watchOptions.js'

const ROOT_FIELDS = {
	// files: [],
	// extends: [],
	include: ['src/**/*.ts'],
	exclude: ['src/**/*.test.ts'],
	// references: [],
	compilerOptions: {
		...typeChecking,
		...modules,
		...emit,
		...javascriptSupport,
		...editorSupport,
		...interopConstraints,
		...backwardsCompatibility,
		...languageAndEnvironment,
		...compilerDiagnostics,
		...projects,
		...outputFormatting,
		...completeness,
		...watchOptions,
	},
	watchOptions: {
		// watchFile: 'useFsEvents',
		// watchDirectory: 'useFsEvents',
		// fallbackPolling: 'priorityPollingInterval',
		// synchronousWatchDirectory: true,
		// excludeDirectories: [],
		// excludeFiles: [],
	},
	typeAcquisition: {
		enable: true,
		// include: [],
		// exclude: [],
		// disableFilenameBasedTypeAcquisition: false,
	},
}

export default ROOT_FIELDS
