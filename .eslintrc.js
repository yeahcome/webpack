module.exports = {
	"root": true,
	"plugins": [
		"prettier",
		"node"
	],
	"extends": ["eslint:recommended", "plugin:node/recommended"],
	"env": {
		"node": true,
		"es6": true,
		"mocha": true,
	},
	"parserOptions": { "ecmaVersion": 2017 },
	"rules": {
		"prettier/prettier": "warn",
		"no-undef": "error",
		"no-extra-semi": "error",
		"semi": "error",
		"no-template-curly-in-string": "error",
		"no-caller": "error",
		"yoda": "error",
		"eqeqeq": "error",
		"global-require": "off",
		"brace-style": "error",
		"eol-last": "error",
		"no-extra-bind": "warn",
		"no-empty": "off",
		"no-multiple-empty-lines": "error",
		"no-multi-spaces": "error",
		"no-process-exit": "warn",
		"no-trailing-spaces": "error",
		"no-use-before-define": "off",
		"no-unused-vars": ["error", { "args": "none" }],
		"key-spacing": "error",
		"no-unsafe-negation": "error",
		"no-loop-func": "warn",
		"object-curly-spacing": ["error", "always"],
		"indent": "off",
		"no-console": "off",
		"valid-jsdoc": "error",
		"node/no-unsupported-features": "error",
		"node/no-deprecated-api": "error",
		"node/no-missing-import": "error",
		"node/no-missing-require": [
			"error",
			{
				"allowModules": [
					"webpack"
				]
			}
		],
		"node/no-unpublished-bin": "error",
		"node/no-unpublished-require": "error",
		"node/process-exit-as-throw": "error"
	}
};
