const TYPE_CHECKING_OPTIONS = {
	// allowUnreachableCode           : null,
	// allowUnusedLabels              : null,
	// alwaysStrict                   : true,  // Default is true if `strict`
	exactOptionalPropertyTypes        : true,
	noFallthroughCasesInSwitch        : false, // Better handled by ESLint.
	// noImplicitAny: true,                    // Default is true if `strict`
	noImplicitOverride                : true,
	noImplicitReturns                 : true,
	// noImplicitThis                 : true,  // Default is true if `strict`
	noPropertyAccessFromIndexSignature: true,  // Todo(gimjb): does ESLint cover this?
	noUncheckedIndexedAccess          : true,
	noUnusedLocals                    : false, // Better handled by ESLint.
	noUnusedParameters                : false, // Better handled by ESLint.
	strict                            : true,
	// strictBindCallApply            : true,  // Default is true if `strict`
	// strictBuiltinIteratorReturn    : true,  // Default is true if `strict`
	// strictFunctionTypes            : true,  // Default is true if `strict`
	// strictNullChecks               : true,  // Default is true if `strict`
	// strictPropertyInitialization   : true,  // Default is true if `strict`
	// useUnknownInCatchVariables     : true,  // Default is true if `strict`
}

export default TYPE_CHECKING_OPTIONS
