ECMAScript 6 - Junio 2015

Se incorporan grandes cambios a Javascript, publicando varias caracteristicas que le dieron
un gran potencial al lenguaje. A contiacion mencionaremos las más importantes:

** Let, Const y Arrow functions

Las nuevas palabras reservadas let y const resuelven varios problemas con var como el scope, hoisting, variables globales, re-declaración y re-asignación de variables.

Una variable declarada con let puede ser re-asignada, pero no re-declarada.
Una variable declarada con const no puede ser re-declarada, ni re-asignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/const
https://developer.mozilla.org/es/docs/Glossary/Scope

En el tema del scope, let y const tienen un scope de bloque y var no.

En variables globales, let y constno guardan sus variables en el objeto global (window, global o globalThis), mientras que var sí los guarda.

** Arrow function
Es una alternativa compacta de representar una función, pueden resultar más amigables
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions

** String Literal

** Parametros por defecto