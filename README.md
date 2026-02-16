# Patrones de Diseno Web Responsivo

Este documento resume cinco patrones de diseno web responsivo: `mostly fluid`, `column drop`, `layout shifter`, `tiny tweaks` y `off canvas`. Estos patrones se difundieron en el trabajo de Luke Wroblewski y fueron recopilados como patrones de layout responsivo en la documentacion de Google. [1] [2]

Los patrones no son mutuamente excluyentes: un sitio puede combinar mas de uno segun su contenido y prioridades de uso. [2]

**Responsividad en este proyecto**
- Patron aplicado: `off canvas` para el menu lateral.
- En pantallas pequenas el menu se oculta y se abre con el boton "Menu".
- En pantallas medianas o mayores el sidebar permanece visible.

**1) Mostly Fluid**

Caracteristicas:
- Layout con multiples columnas que se redimensionan de forma fluida y se apilan cuando el ancho es pequeno. [2] [5]
- En pantallas grandes se aprovechan los margenes y el ancho disponible; el cambio estructural fuerte ocurre cuando ya no caben las columnas. [5]

Ventajas:
- Mantiene la estructura general mientras el grid fluye, lo que reduce cambios abruptos de diseno. [2]
- Suele ser facil de implementar cuando el contenido ya esta organizado en columnas. [5]

Desventajas:
- Al apilar columnas en pantallas pequenas puede generar paginas largas. (Inferencia a partir del comportamiento de apilado) [2] [5]

Aplicaciones:
- Sitios con varias columnas de contenido que pueden colapsar a una sola columna. [2]

Ejemplos:
- Five Simple Steps, Trent Walton, Sifter, ChoiceResponse, Princess Elisabeth Antarctica. [2]

**2) Column Drop**

Caracteristicas:
- Mantiene columnas con tamanos relativamente constantes y, al reducirse el ancho, las columnas "caen" y se apilan verticalmente. [2] [5]
- La adaptacion principal ocurre por el orden de apilado, no por cambios grandes de estructura. [2]

Ventajas:
- Comportamiento simple y predecible al pasar de varias columnas a una sola. (Inferencia) [2]

Desventajas:
- Puede terminar en una columna muy larga cuando hay muchas secciones. (Inferencia) [2]

Aplicaciones:
- Paginas con sidebar y contenido central donde el sidebar puede bajar debajo del contenido. (Inferencia) [2]

Ejemplos:
- Modernizr, Owltastic, Wee Nudge, Festival de Saintes, Ash Personal Training. [2]

**3) Layout Shifter**

Caracteristicas:
- Cambia de manera notable la disposicion entre varios puntos de quiebre; es el patron mas adaptable. [2] [3]
- Requiere mayor esfuerzo de diseno y desarrollo por la cantidad de variantes de layout. [2] [3]

Ventajas:
- Permite reorganizar el contenido segun el contexto de uso y el tamano de pantalla. [2] [3]

Desventajas:
- Es el patron con mayor costo de implementacion y mantenimiento. [2] [3]

Aplicaciones:
- Sitios con muchos modulos que necesitan jerarquias distintas en desktop, tablet y movil. (Inferencia) [2]

Ejemplos:
- Food Sense, Performance Marketing Awards, Forefathers Group, The Boston Globe, Andersson-Wise Architects. [2]

**4) Tiny Tweaks**

Caracteristicas:
- Diseno simple con pocos elementos; a veces no requiere media queries o usa muy pocas y solo hace ajustes pequenos de tipografia o imagenes. [3]
- Suele funcionar mejor en layouts de una sola columna o con pocos elementos. [2] [3]

Ventajas:
- Rapido de implementar y con bajo mantenimiento. [3]

Desventajas:
- No escala bien para sitios con mucha complejidad o multiples secciones. [2]

Aplicaciones:
- Articulos, landing pages o contenido predominantemente lineal. (Inferencia) [3]

Ejemplos:
- Future Friendly, Path, Neovada, Lycos, Design Made in Germany. [2]

**5) Off Canvas**

Caracteristicas:
- Desplaza la navegacion o contenido secundario fuera de la pantalla y lo muestra bajo demanda. [2] [3] [4]
- Utiliza el espacio fuera del viewport para evitar layouts muy largos en mobile. [2] [3]

Ventajas:
- Mantiene el foco en el contenido principal y libera espacio en pantallas pequenas. [2] [4]

Desventajas:
- Puede afectar la descubribilidad y la accesibilidad si no se implementa con cuidado. [2] [3]

Aplicaciones:
- Menus de navegacion, filtros, herramientas y acciones secundarias. [3] [4]

Ejemplos:
- Facebook (mobile), Path, Google (mobile). [2]

**Adaptacion Propuesta para Manual ASM React**

Patron elegido: `off canvas`.

Motivo: la pagina usa un sidebar fijo de navegacion. Para pantallas pequenas, el patron off canvas permite ocultar ese menu y mostrarlo solo cuando el usuario lo necesita, conservando mas espacio para el contenido principal. [2] [4]

Propuesta concreta (sin cambiar codigo en este documento):
- En desktop, mantener el sidebar visible.
- En tablet y movil, convertirlo en un panel off canvas que se abre con un boton de menu.
- El contenido principal ocupa todo el ancho cuando el menu esta cerrado.

**Referencias**

1. Google Developers. "Responsive Web Design Patterns" (Web Fundamentals). https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns?hl=es
2. Luke Wroblewski. "Multi-Device Layout Patterns". http://www.lukew.com/ff/entry.asp?1514
3. IMDAC. "RWD Patterns" (modulo educativo). http://www.imdac.com/external/Divi/wp-content/uploads/2020/12/Module-6.pdf
4. Smashing Magazine. "Off-Canvas Navigation For Responsive Website". https://www.smashingmagazine.com/2013/01/off-canvas-navigation-for-responsive-website/
5. Vanseo Design. "Responsive Web Design Patterns: Mostly Fluid & Column Drop". https://vanseodesign.com/web-design/responsive-web-design-patterns-mostly-fluid-column-drop/
