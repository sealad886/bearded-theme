export const accessors = [
  "support.module.elm",
  "entity.other.inherited-class.python",
  "variable.other.object",
  "support.other.namespace.php",
  "entity.other.attribute-name.namespace.xml",
  "record.accessor",
  "entity.name.record.field.accessor",
  "storage.modifier.import.java",
  "storage.modifier.import.groovy",
  "meta.import.swift entity.name.type.swift",
  "entity.name.variable.parameter.cs",
  "meta.member.access.python",
  "variable.other.property.ts",
  "variable.other.property.js",
  "constant.language.symbol.elixir",
];

export const classes = ["entity.name.type"];

export const comments = [
  "comment",
  "punctuation.definition.comment",
  "string.quoted.docstring.multi",
  "comment.block.documentation source",
];

export const keyword = [
  "keyword.control",
  "keyword.control.conditional",
  "storage.modifier",
  "keyword.operator.new",
  "keyword.operator.expression",
  // BLADE
  "keyword.begin.blade",
  "keyword.end.blade",
  "keyword.blade",
  // ELM
  "keyword.type-alias",
  "keyword.type",
  "support.class.console",
  "keyword.other.await",
  "storage.type.class.jsdoc",
  "punctuation.definition.block.tag.jsdoc",
  "keyword.other.new",
  "keyword.other.phpdoc",
  "keyword.other.use.php",
  "keyword.operator.logical.python",
  "keyword.other.import.static.groovy",
  "keyword.other.import.groovy",
  "punctuation.definition.attribute.swift",
  "source.svelte meta.scope.tag.main.svelte meta.tag.start.svelte variable.function.svelte",
  "meta.directive.on.svelte entity.name.type.svelte",
  "keyword.other.special-method.elixir",
  "keyword.edge",
  "entity.name.function.edge",
  "support.constant.edge",
  "keyword.other.gdscript",
  "keyword.other.onready.gdscript",
  "source.graphql meta.fragment.graphql keyword.on.graphql",
  "source.graphql meta.type.interface.graphql keyword.implements.graphql",
  "source.graphql meta.type.interface.graphql meta.type.object.graphql meta.type.list.graphql keyword.operator.nulltype.graphql",
  "source.graphql meta.variables.graphql keyword.operator.nulltype.graphql",
  "source.graphql meta.type.interface.graphql meta.type.object.graphql keyword.operator.nulltype.graphql",
  "keyword.operator.class.php",
  "keyword.operator.spread.php",
  "keyword.operator.type.php",
  "keyword.operator.increment-decrement.php",
  "keyword.operator.increment-increment.php",
  "punctuation.support.type.property-name.begin.json",
  "punctuation.support.type.property-name.end.json",
  "keyword.operator.string.php",
  "keyword.operator.ternary.php",
  "keyword.operator.variadic.php",
  "keyword.operator.nullable-type.php",
  "keyword.other.use-as.php",
  "keyword.import.go",
  "keyword.operator.address.go",
];

export const constants = ["constant", "support.constant.core.php"];

export const currentText = [
  "source",
  "support",
  "constant.character.entity.named",
  "meta.jsx.children",
  // LUA
  "source.lua",
  "text.html.derivative",
  "source.graphql meta.selections variable.other.alias.graphql",
  "source.graphql meta.type.interface.graphql meta.type.object.graphql variable.graphql",
  "source.graphql variable.arguments.graphql",
];

export const decorators = [
  "entity.name.function.decorator",
  "meta.decorator entity.name.function",
  "meta.decorator punctuation.decorator",
  "punctuation.definition.decorator",
  "meta.decorator variable.other.readwrite.ts",
  "variable.parameter.gdscript",
];

export const exportScope = [
  "keyword.control.export",
  "support.type.object.module",
];

export const functions = [
  // "entity",
  "support.function",
  "entity.name.function",
  "meta.function-call",
  "meta.function",
  "meta.method.declaration",
  "meta.function-call support",
  "meta.decorator meta.definition.method entity.name.function",
  "meta.decorator meta.method.declaration entity.name.function",
  // Typescript
  "variable.language.super.ts",
  // VUE
  "source.directive",
  // PYTHON
  "meta.function-call.generic",
  // PHP
  "meta.method-call.static.php",
  "meta.method-call.php",
  "meta.class storage.type",
  "meta.method.groovy",
  "meta.bracket.square.access",
  // Elixir
  "entity.name.function-call.elixir",
  "punctuation.output.liquid support.variable.liquid",
  "meta.function.echo.edge source.js keyword.operator.error-control.js",
  "entity.name.type.variant.gdscript",
];

export const importScope = [
  "keyword.control.import",
  "meta.module.name.elm support",
  "meta.import.elm support",
  // CSS
  "keyword.control.at-rule",
  "punctuation.definition.keyword",
  // PUG
  "variable.control.import.include",
  "keyword.other.import.java",
];

export const dataProperty = [
  "keyword.other.definition.ini",
  "support.type.property-name",
  "entity.name.tag.yaml",
];

export const objectProperty = [
  "meta.object-literal.key",
  "variable.object.property",
];

export const operators = [
  "keyword.operator.comparison",
  "storage.type.function.arrow",
  // LUA
  "keyword.operator.lua",
  "keyword.operator.assignment",
  "keyword.operator.relational",
  "keyword.operator.increment",
  "keyword.operator.decrement",
  "keyword.operator.logical",
  "keyword.operator.arithmetic",
  "keyword.operator.math",
];

export const punctuation = [
  "punctuation",
  "attribute_value",
  "meta.brace",
  "punctuation.definition.parameters",
  "punctuation.definition.template-expression",
  "keyword.operator",
  "keyword.other",
  // "keyword.operator.arrow",
  "punctuation.terminator",
  "punctuation.separator",
  "punctuation.definition.generic.begin",
  "punctuation.definition.generic.end",
  // ELM
  "meta.function.type-declaration",
  "keyword.other.colon.elm",
  "meta.record.field.elm keyword.other.elm",
  "keyword.other.period.elm",
  // XML
  "meta.tag.xml",
  "meta.tag.preprocessor.xml",
  // JAVASCRIPT
  "punctuation.definition.block",
  "punctuation.accessor",
  // PUG
  "constant.name.attribute.tag.pug",
  "string.interpolated.pug",
  // TWIG
  "keyword.other.whitespace.liquid",
  "meta.tag.template.block.twig",
  "meta.tag.template.value.twig",
  "begin.bracket",
  "end.bracket",
  "text.html.twig meta.tag.inline.any",
  "text.html.twig meta.tag.block.any",
  // BLADE
  "support.function.construct.begin.blade",
  "support.function.construct.end.blade source.php",
  "support.function.construct.end.blade",
  "meta.function.echo.blade source.php",
  "punctuation.definition.list.begin.python",
  "punctuation.definition.list.end.python",
  // VUE
  "text.html.vue-html meta.tag.block.any",
  "entity.name.variable.tuple-element.cs",
  "keyword.operator.assignment.tsx",
  "meta.definition.method.signature.java",
  "meta.class.body.groovy",
  "meta.definition.method.groovy meta.method.body.java meta.declaration.assertion.groovy",
  "punctuation.definition.list.begin.erlang",
  "meta.expression.parenthesized",
  "meta.definition.function.swift meta.parameter-clause.swift",
  "source.swift meta.function-call.swift",
  "punctuation.section.embedded.end.swift source.swift",
  "source.lua",
  "meta.function.lua",
  "punctuation.definition.keyword.svelte",
  "source.svelte meta.scope.tag.SpeakerPicture.svelte meta.tag.start.svelte entity.other.attribute-name.svelte",
  "expression.embbeded.vue punctuation.definition.tag.begin.html.vue",
  "expression.embbeded.vue punctuation.definition.tag.end.html.vue",
  "source.graphql	meta.type.interface.graphql meta.type.object.graphql meta.type.list.graphql meta.brace.square.graphql",
  "punctuation.definition.variable.php",
];

export const self = [
  "variable.language.this",
  "variable.language.special.self",
  "variable.parameter.function.language.special.self",
  "variable.language.this.php punctuation.definition.variable.php",
  "meta.class.body.php storage.type.php",
  "variable.parameter.function.swift entity.name.function.swift",
  "variable.other.jsdoc",
];

export const storages = [
  "storage",
  // "storage.type",
  "meta.var.expr storage.type",
  "storage.type.function",
  "keyword.function",
  "storage.type.class",
  "storage.type.property",
  "keyword.other",
  // LUA
  "keyword.local.lua",
  "entity.name.class",
  "meta.function.lua keyword.control.lua",
  // TS
  "storage.type.enum",
  "storage.type.interface",
  "storage.type.type",
  "entity.name.type.class.java",
  "support.class.php",
  "entity.other.inherited-class.php",
  "entity.name.type.class.groovy",
  "storage.type.rust",
  "entity.name.type.class.swift",
  "source.svelte meta.script.svelte source.ts entity.name.label.ts",
  "meta.directive.on.svelte keyword.control.svelte",
  "storage.type.const.gdscript",
  "storage.type.var.gdscript",
  "source.graphql declaration.meta.type keyword",
  "source.graphql meta.type.interface.graphql keyword.type.graphql",
  "source.graphql keyword.schema.graphql",
  "source.graphql keyword.operation.graphql",
  "source.graphql meta.enum.graphql keyword.enum.graphql",
  "source.graphql meta.fragment.graphql keyword.fragment.graphql",
  "storage.type.trait.php",
  "keyword.type.go",
  "keyword.var.go",
];

export const strings = [
  "string",
  "string.template",
  "string.quoted.single",
  "punctuation.definition.string",
  "punctuation.definition.string.template",
  "punctuation.definition.string.begin",
  "punctuation.definition.string.end.html source.js-ignored-vscode",
  "punctuation.definition.string.end",
  "string.other.link",
  "constant.character.escape.regexp",
  // CSS
  "variable.parameter.url",
  "constant.other.symbol.quoted.single.erlang",
  "constant.other.symbol.quoted.single.erlang punctuation.definition.symbol.begin.erlang",
  "constant.other.symbol.quoted.single.erlang punctuation.definition.symbol.end.erlang",
  "meta.import.ts punctuation.definition.variable.svelte",
  "punctuation.definition.string.end.html source.css-ignored-vscode",
  "text.html.edge punctuation.definition.variable.js",
  "string.unquoted.plain.out.yaml",
];

export const stringsAlt = [
  "string.quoted.docstring.multi.python",
  "string.quoted.double.block.python punctuation.definition.string.end.python",
  "string.quoted.double.block.python punctuation.definition.string.begin.python",
  "string.quoted.double.block.python",
];

export const types = [
  "entity.name.type",
  "support.type",
  "support.class",
  "storage.type",
  "entity.other.inherited-class",
  "keyword.type",
  "storage.type.java",
  "storage.type.primitive.java",
  "storage.type.generic.java",
  "keyword.other.type",
  "punctuation.section.embedded.begin.php",
  "punctuation.section.embedded.end.php source.php",
  "punctuation.section.embedded.end.php",
  "storage.type.object.array.java",
  "storage.type.primitive.groovy",
  "storage.type.groovy",
  "meta.definition.type.body.swift meta.function-call.swift",
  "meta.definition.type.class.swift meta.inheritance-clause.swift",
  "variable.other.constant.elixir",
  "source.graphql declaration.meta.type support",
  "source.graphql meta.selections",
  "source.graphql meta.enum.graphql meta.type.object.graphql constant.character.enum.graphql",
  "source.graphql meta.fragment.graphql entity.name.fragment.graphql",
  "entity.name.type.class.php",
  "support.class.php",
  "entity.other.inherited-class.php",
  "entity.other.alias.php",
];

export const variables = [
  "variable",
  "variable.language",
  "entity.name.type.class.js",
  "entity.name.variable",
  "support.variable.magic",
  "meta.method.body",
  "entity.name.variable",
  "punctuation.definition.variable",
  "meta.class variable.object.property",
  "variable.other.constant entity.name.function",
  "entity.name.variable.tuple-element.cs punctuation.separator.colon.cs",
  "meta.definition.variable.name.groovy",
  "meta.body.struct.cpp",
  "parameter.variable.function.elixir",
  "meta.directive.edge source.js",
  "meta.function.echo.edge source.js",
  "text.html.edge meta.function.echo.edge meta.function-call.js",
  "source.css variable.parameter.keyframe-list.css",
  "source.css meta.property-value.css",
  "source.css.scss meta.at-rule.keyframes.scss entity.name.function.scss",
  "source.css.scss meta.property-value.scss",
];

export const typeConstructor = ["source.elm constant.type-constructor"];
export const type = ["source.elm storage.type"];
