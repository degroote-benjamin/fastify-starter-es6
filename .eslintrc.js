module.exports = {
  parserOptions: {
    sourceType: "module",
  },
  plugins: [
    'security',
    'mocha',
  ],
  settings: {},
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  rules: {

    // NODE JS RULES
    // enforce return after a callback
    'callback-return': ['error', ['done', 'callback', 'cb', 'next']],

    // enforce require() on top-level module scope
    'global-require': 'error',

    // enforce error handling in callbacks
    'handle-callback-err': 'warn',

    // disallow mixing regular variable and require declarations
    'no-mixed-requires': 'error',

    // disallow use of new operator with the require function
    'no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    'no-path-concat': 'error',

    // disallow process.exit()
    'no-process-exit': 'error',

    // disallow use of synchronous methods
    'no-sync': 'warn',

    // ES6 RULES
    // require braces in arrow function body
    'arrow-body-style': 'off',

    // require parens in arrow function arguments
    'arrow-parens': ['error', 'always'],

    // require space before/after arrow function's arrow
    'arrow-spacing': ['error', { before: true, after: true }],

    // verify calls of super() in constructors
    'constructor-super': 'error',

    // enforce spacing around the * in generator functions
    'generator-star-spacing': ['error', { before: false, after: true }],

    // disallow modifying variables of class declarations
    'no-class-assign': 'error',

    // disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': 'error',

    // disallow modifying variables that are declared using const
    'no-const-assign': 'error',

    // disallow duplicate name in class members
    'no-dupe-class-members': 'error',

    // disallow use of the new operator with the Symbol object
    'no-new-symbol': 'error',

    // disallow use of this/super before calling super() in constructors
    'no-this-before-super': 'error',

    // disallow unnecessary constructor
    'no-useless-constructor': 'error',

    // require let or const instead of var
    'no-var': 'error',

    // require method and property shorthand syntax for object literals
    'object-shorthand': ['error', 'always'],

    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': 'off',

    // suggest using const declaration for variables that are never modified after declared
    'prefer-const': 'error',

    // suggest using the rest parameters instead of arguments
    'prefer-rest-params': 'error',

    // suggest using the spread operator instead of .apply()
    'prefer-spread': 'error',

    // suggest using template literals instead of strings concatenation
    'prefer-template': 'error',

    // disallow generator functions that do not have yield
    'require-yield': 'error',

    // enforce spacing around embedded expressions of template strings
    'template-curly-spacing': ['error', 'never'],

    // enforce spacing around the * in yield* expressions
    'yield-star-spacing': ['error', { before: false, after: true }],


    // POSSIBLE ERRORS RULES
    // disallow or enforce trailing commas
    'comma-dangle': ['error', 'always-multiline'],

    // disallow assignment in conditional expressions
    'no-cond-assign': ['error', 'always'],

    // disallow use of console
    'no-console': 'error',

    // disallow use of constant expressions in conditions
    'no-constant-condition': 'error',

    // disallow control characters in regular expressions
    'no-control-regex': 'error',

    // disallow use of debugger
    'no-debugger': 'error',

    // disallow duplicate arguments in functions
    'no-dupe-args': 'error',

    // disallow duplicate keys when creating object literals
    'no-dupe-keys': 'error',

    // disallow a duplicate case label.
    'no-duplicate-case': 'error',

    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 'error',

    // disallow empty block statements
    'no-empty': 'error',

    // disallow assigning to the exception in a catch block
    'no-ex-assign': 'error',

    // disallow double-negation boolean casts in a boolean context
    'no-extra-boolean-cast': 'error',

    // disallow unnecessary parentheses
    'no-extra-parens': ['error', 'functions'],

    // disallow unnecessary semicolons
    'no-extra-semi': 'error',

    // disallow overwriting functions written as function declarations
    'no-func-assign': 'error',

    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': ['error', 'both'],

    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 'error',

    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 'error',

    // disallow negation of the left operand of an in expression
    'no-negated-in-lhs': 'error',

    // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': 'error',

    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 'error',

    // disallow sparse arrays
    'no-sparse-arrays': 'error',

    // Avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': 'error',

    // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 'error',

    // disallow comparisons with the value NaN
    'use-isnan': 'error',

    // Ensure JSDoc comments are valid
    'valid-jsdoc': 'warn',

    // Ensure that the results of typeof are compared against a valid string
    'valid-typeof': 'error',

    // VARIABLES RULES
    // enforce or disallow variable initializations at definition
    'init-declarations': 'error',

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': 'error',

    // disallow deletion of variables
    'no-delete-var': 'error',

    // disallow labels that share a name with a variable
    'no-label-var': 'error',

    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 'error',

    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 'error',

    // disallow use of undefined when initializing variables
    'no-undef-init': 'error',

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 'error',

    // disallow use of undefined variable
    'no-undefined': 'error',

    // disallow declaration of variables that are not used in the code
    'no-unused-vars': 'error',

    // disallow use of variables before they are defined
    'no-use-before-define': ['error', { functions: false, classes: false }],

    // BEST PRACTICE RULES
    // Enforces getter/setter pairs in objects
    'accessor-pairs': 'error',

    // Enforces return statements in callbacks of array's methods
    'array-callback-return': 'error',

    // treat var statements as if they were block scoped
    'block-scoped-var': 'error',

    // require return statements to either always or never specify values
    'consistent-return': 'error',

    // specify curly brace conventions for all control statements
    curly: ['error', 'all'],

    // require default case in switch statements
    'default-case': 'error',

    // enforces consistent newlines before or after dots
    'dot-location': ['error', 'property'],

    // encourages use of dot notation whenever possible
    'dot-notation': ['error', { allowKeywords: true }],

    // require the use of === and !==
    eqeqeq: ['error', 'allow-null'],

    // make sure for-in loops have an if statement
    'guard-for-in': 'error',

    // disallow the use of alert, confirm, and prompt
    'no-alert': 'warn',

    // disallow use of arguments.caller or arguments.callee
    'no-caller': 'error',

    // disallow lexical declarations in case clauses
    'no-case-declarations': 'error',

    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 'off',

    // disallow else after a return in an if
    'no-else-return': 'error',

    // disallow use of empty destructuring patterns
    'no-empty-pattern': 'error',

    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 'off',

    // disallow use of eval()
    'no-eval': 'error',

    // disallow adding to native types
    'no-extend-native': 'error',

    // disallow unnecessary function binding
    'no-extra-bind': 'error',

    // disallow unnecessary labels
    'no-extra-label': 'error',

    // disallow fallthrough of case statements
    'no-fallthrough': 'error',

    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'error',

    // disallow the type conversions with shorter notations
    'no-implicit-coercion': 'error',

    // disallow var and named functions in global scope
    'no-implicit-globals': 'error',

    // disallow use of eval()-like methods
    'no-implied-eval': 'error',

    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'off',

    // disallow usage of __iterator__ property
    'no-iterator': 'error',

    // disallow use of labeled statements
    'no-labels': 'error',

    // disallow unnecessary nested blocks
    'no-lone-blocks': 'error',

    // disallow creation of functions within loops
    'no-loop-func': 'error',

    // disallow the use of magic numbers
    'no-magic-numbers': 'off',

    // disallow use of multiple spaces
    'no-multi-spaces': 'error',

    // disallow use of multiline strings
    'no-multi-str': 'error',

    // disallow reassignments of native objects
    'no-native-reassign': 'error',

    // disallow use of new operator for Function object
    'no-new-func': 'error',

    // disallows creating new instances of String,Number, and Boolean
    'no-new-wrappers': 'error',

    // disallow use of the new operator when not part of an assignment or comparison
    'no-new': 'error',

    // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    'no-octal-escape': 'error',

    // disallow use of octal literals
    'no-octal': 'error',

    // disallow reassignment of function parameters
    'no-param-reassign': ['error', { props: false }],

    // disallow use of process.env
    'no-process-env': 'off',

    // disallow usage of __proto__ property
    'no-proto': 'error',

    // disallow declaring the same variable more than once
    'no-redeclare': 'error',

    // disallow use of assignment in return statement
    'no-return-assign': 'error',

    // disallow use of javascript: urls.
    'no-script-url': 'error',

    // disallow assignments where both sides are exactly the same
    'no-self-assign': 'error',

    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',

    // disallow use of the comma operator
    'no-sequences': 'error',

    // restrict what can be thrown as an exception
    'no-throw-literal': 'error',

    // disallow unmodified conditions of loops
    'no-unmodified-loop-condition': 'error',

    // disallow usage of expressions in statement position
    'no-unused-expressions': 'error',

    // disallow unused labels
    'no-unused-labels': 'error',

    // disallow unnecessary .call() and .apply()
    'no-useless-call': 'error',

    // disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 'error',

    // disallow use of the void operator
    'no-void': 'error',

    // disallow usage of configurable warning terms in comments e.g. TODO or FIXME
    'no-warning-comments': [1, { terms: ['TODO', 'FIXME'], location: 'start' }],

    // disallow use of the with statement
    'no-with': 'error',

    // require use of the second argument for parseInt()
    radix: 'error',

    // require declaration of all vars at the top of their containing scope
    'vars-on-top': 'error',

    // require immediate function invocation to be wrapped in parentheses
    'wrap-iife': ['error', 'outside'],

    // require or disallow Yoda conditions
    yoda: 'error',

    // STRICT MODE RULES
    // require effective use of strict mode directives
    strict: ['error', 'global'],

    // STYLE RULES
    // enforce spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],

    // disallow or enforce spaces inside of single line blocks
    'block-spacing': ['error', 'always'],

    // enforce one true brace style
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],

    // require camel case names
    camelcase: 'error',

    // enforce spacing before and after comma
    'comma-spacing': ['error', { before: false, after: true }],

    // enforce one true comma style
    'comma-style': ['error', 'last'],

    // require or disallow padding inside computed properties
    'computed-property-spacing': ['error', 'never'],

    // enforce consistent naming when capturing the current execution context
    'consistent-this': 'off',

    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 'error',

    // require function expressions to have a name
    'func-names': 'off',

    // enforce use of function declarations or expressions
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

    // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-length': ['error', { min: 3, max: 30, exceptions: ['fs', 'id', 'up', 'h', 'as', '_'] }],

    // require identifiers to match the provided regular expression
    'id-match': 'off',

    // blacklist certain identifiers to prevent them being used
    'id-blacklist': ['error', 'data', 'datas'],

    // specify tab or space width for your code
    indent: ['error', 2, { SwitchCase: 1 }],

    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': 'error',

    // enforce spacing between keys and values in object literal properties
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // enforce spacing before and after keywords
    'keyword-spacing': 'error',

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': 'error',

    // enforce empty lines around comments
    'lines-around-comment': ['error', {
      beforeBlockComment: true,
      afterBlockComment: false,
      beforeLineComment: true,
      afterLineComment: false,
    }],

    // specify the maximum length of a line in your program
    'max-len': ['error', { code: 120, comments: 80 }],

    // require a capital letter for constructors
    'new-cap': 'error',

    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 'error',

    // require or disallow an empty newline after variable declarations
    'newline-after-var': ['error', 'always'],

    // enforce newline after each call when chaining the calls
    'newline-per-chained-call': 'error',

    // disallow use of the Array constructor
    'no-array-constructor': 'error',

    // disallow use of bitwise operators
    'no-bitwise': 'error',

    // disallow use of the continue statement
    'no-continue': 'error',

    // disallow comments inline after code
    'no-inline-comments': 'error',

    // disallow if as the only statement in an else block
    'no-lonely-if': 'error',

    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',

    // disallow multiple empty lines
    'no-multiple-empty-lines': ['error', { max: 2 }],

    // disallow negated conditions
    'no-negated-condition': 'error',

    // disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // disallow the use of the Object constructor
    'no-new-object': 'error',

    // disallow use of unary operators, ++ and --
    'no-plusplus': 'error',

    // disallow use of certain syntax in code
    'no-restricted-syntax': ['error', 'WithStatement'],

    // disallow space between function identifier and application
    'no-spaced-func': 'error',

    // disallow the use of ternary operators
    'no-ternary': 'off',

    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',

    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 'off',

    // disallow the use of ternary operators when a simpler alternative exists
    'no-unneeded-ternary': 'error',

    // disallow whitespace before properties
    'no-whitespace-before-property': 'error',

    // require or disallow padding inside curly braces
    'object-curly-spacing': ['error', 'always'],

    // require or disallow one variable declaration per function
    'one-var': ['error', 'never'],

    // require or disallow an newline around variable declarations
    'one-var-declaration-per-line': ['error', 'always'],

    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': ['error', 'never'],

    // enforce operators to be placed before or after line breaks
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],

    // enforce padding within blocks
    'padded-blocks': ['error', { classes: 'always', switches: 'always' }],

    // require quotes around object literal property names
    'quote-props': ['error', 'as-needed', { keywords: false }],

    // specify whether backticks, double or single quotes should be used
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

    // Require JSDoc comment
    'require-jsdoc': 'error',

    // enforce spacing before and after semicolons
    'semi-spacing': ['error', { before: false, after: true }],

    // require or disallow use of semicolons instead of ASI
    semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],

    // sort variables within the same declaration block
    'sort-vars': ['error', { ignoreCase: true }],

    // sort import declarations within module
    'sort-imports': ['error', { ignoreCase: true }],

    // require or disallow a space before blocks
    'space-before-blocks': ['error', 'always'],

    // require or disallow a space before function opening parenthesis
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],

    // disallow spaces inside parentheses
    'space-in-parens': ['error', 'never'],

    // require spaces around operators
    'space-infix-ops': 'error',

    // require or disallow spaces before/after unary operators
    'space-unary-ops': ['error', { words: true, nonwords: false }],

    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': ['error', 'always'],

    // require regex literals to be wrapped in parentheses
    'wrap-regex': 'error',

    // COMPLEXITY RULES
    // specify the maximum cyclomatic complexity allowed in a program
    complexity: ['error', 7],

    // specify the maximum depth that blocks can be nested
    'max-depth': ['error', 3],

    // limits the number of parameters that can be used in the function declaration.
    'max-params': ['error', 5],

    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': ['error', 7],

    // specify the maximum number of statement allowed in a function
    'max-statements': [1, 30],

    // restrict the number of statements per line
    'max-statements-per-line': ['error', { max: 1 }],

    // TEST RULES
    // no 'only' test
    'mocha/no-exclusive-tests': 'error',

    // no skipped test
    'mocha/no-skipped-tests': 'error',

    // no pending test
    'mocha/no-pending-tests': 'error',

    // no nested test
    'mocha/no-nested-tests': 'error',

    // SECURITY RULES
    // Detects calls to buffer with noAssert flag set
    'security/detect-buffer-noassert': 'error',

    // Detects instances of child_process & non-literal exec()
    'security/detect-child-process': 'error',

    // Detects object.escapeMarkup = false, which can be used with some template
    // engines to disable escaping of HTML entities. This can lead to Cross-Site
    // Scripting (XSS) vulnerabilities.
    'security/detect-disable-mustache-escape': 'error',

    // Detects eval(variable) which can allow an attacker to run arbitary code inside your process.
    'security/detect-eval-with-expression': 'error',

    // Detects instances of new Buffer(argument) where argument is any non literal value.
    'security/detect-new-buffer': 'error',

    // Detects Express csrf middleware setup before method-override middleware.
    // This can allow GET requests (which are not checked by csrf) to turn into POST requests later.
    'security/detect-no-csrf-before-method-override': 'error',

    // Detects variable in filename argument of fs calls, which might allow an
    // attacker to access anything on your system.
    'security/detect-non-literal-fs-filename': 'error',

    // Detects RegExp(variable), which might allow an attacker to DOS your
    // server with a long-running regular expression.
    'security/detect-non-literal-regexp': 'error',

    // Detects require(variable), which might allow an attacker to load and run arbitrary code,
    // or access arbitrary files on disk.
    'security/detect-non-literal-require': 'error',

    // Detects variable[key] as a left- or right-hand assignment operand.
    'security/detect-object-injection': 'error',

    // Detects insecure comparisons (==, !=, !== and ===), which check input sequentially.
    'security/detect-possible-timing-attacks': 'warn',

    // Detects if pseudoRandomBytes() is in use, which might not give you the randomness you need and expect.
    'security/detect-pseudoRandomBytes': 'error',

    // Locates potentially unsafe regular expressions, which may take a very
    // long time to run, blocking the event loop.
    'security/detect-unsafe-regex': 'error',

  },
}
