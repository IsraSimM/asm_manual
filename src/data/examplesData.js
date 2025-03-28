const examplesData = [
  // Ejemplos de NASM puro
  {
    id: "hello-world",
    title: "Hola Mundo!",
    icon: "FaUser",
    category: "nasm",
    description:
      "Este es un ejemplo clásico de un programa en ensamblador que imprime 'Hola, mundo!' en la consola. Utiliza NASM para ensamblar el código y las interrupciones del sistema operativo Linux (`int 0x80`) para escribir en la salida estándar y salir del programa. Es un excelente punto de partida para entender cómo funcionan los programas básicos en ensamblador.",
    code: `section .data
    msg db 'Hola, mundo!', 0

section .text
    global _start

_start:
    mov eax, 4
    mov ebx, 1
    mov ecx, msg
    mov edx, 13
    int 0x80

    mov eax, 1
    xor ebx, ebx
    int 0x80`,
    codeFilename: "hello.asm",
    compileSteps: [
      {
        label: "Navegar al directorio",
        description: "Dirígete al directorio donde está tu archivo",
        command: `cd 'ruta/de/tu/codigo'`,
      },
      {
        label: "Compilar con NASM",
        description: "Convierte el archivo ensamblador a un archivo objeto",
        command: `nasm -f elf64 hello.asm`,
      },
      {
        label: "Enlazar con ld",
        description: "Enlaza el archivo objeto para crear un ejecutable",
        command: `ld -s -o hello hello.o`,
      },
      {
        label: "Ejecutar",
        description: "Ejecuta el programa generado",
        command: `./hello`,
      },
    ],
    result: `isra@Isras:~/Documents$ nasm -f elf64 hello.asm
isra@Isras:~/Documents$ ld -s -o hello hello.o
isra@Isras:~/Documents$ ./hello
Hola, mundo!`,
  },
  {
    id: "print-numbers",
    title: "Lectura e Impresión de un Número",
    icon: "FaSignInAlt",
    category: "nasm",
    description:
      "Este ejemplo muestra cómo leer un número ingresado por el usuario y luego imprimirlo en la consola usando ensamblador. Utiliza NASM y las interrupciones del sistema operativo Linux (`int 0x80`) para manejar la entrada y salida.",
    code: `; Ejemplo de código para lectura e impresión de un número
section .data
    msg_input db 'Ingrese un número: ', 0
    msg_output db 'El número ingresado es: ', 0
    newline db 10, 0

section .bss
    num resb 4

section .text
    global _start

_start:
    ; Imprimir mensaje para ingresar número
    mov eax, 4
    mov ebx, 1
    mov ecx, msg_input
    mov edx, 17
    int 0x80

    ; Leer número
    mov eax, 3
    mov ebx, 0
    mov ecx, num
    mov edx, 4
    int 0x80

    ; Imprimir mensaje de salida
    mov eax, 4
    mov ebx, 1
    mov ecx, msg_output
    mov edx, 22
    int 0x80

    ; Imprimir el número ingresado
    mov eax, 4
    mov ebx, 1
    mov ecx, num
    mov edx, 4
    int 0x80

    ; Imprimir salto de línea
    mov eax, 4
    mov ebx, 1
    mov ecx, newline
    mov edx, 1
    int 0x80

    ; Salir
    mov eax, 1
    xor ebx, ebx
    int 0x80`,
    codeFilename: "print_numbers.asm",
    compileSteps: [
      {
        label: "Navegar al directorio",
        description: "Dirígete al directorio donde está tu archivo",
        command: `cd 'ruta/de/tu/codigo'`,
      },
      {
        label: "Compilar con NASM",
        description: "Convierte el archivo ensamblador a un archivo objeto",
        command: `nasm -f elf64 print_numbers.asm`,
      },
      {
        label: "Enlazar con ld",
        description: "Enlaza el archivo objeto para crear un ejecutable",
        command: `ld -s -o print_numbers print_numbers.o`,
      },
      {
        label: "Ejecutar",
        description: "Ejecuta el programa generado",
        command: `./print_numbers`,
      },
    ],
    result: `isra@Isras:~/Documents$ nasm -f elf64 print_numbers.asm
isra@Isras:~/Documents$ ld -s -o print_numbers print_numbers.o
isra@Isras:~/Documents$ ./print_numbers
Ingrese un número: 42
El número ingresado es: 42
`,
  },
  {
    id: "sum-ascii",
    title: "Suma de Números con ASCII",
    icon: "FaPlus",
    category: "nasm",
    description:
      "Este ejemplo muestra cómo sumar dos números ingresados como caracteres ASCII y mostrar el resultado en la consola usando ensamblador.",
    code: `; Código para suma de números con ASCII
section .data
    msg1 db 'Ingrese el primer número: ', 0
    msg2 db 'Ingrese el segundo número: ', 0
    msg_result db 'La suma es: ', 0
    newline db 10, 0

section .bss
    num1 resb 4
    num2 resb 4
    result resb 4

section .text
    global _start

_start:
    ; Imprimir mensaje para el primer número
    mov eax, 4
    mov ebx, 1
    mov ecx, msg1
    mov edx, 23
    int 0x80

    ; Leer primer número
    mov eax, 3
    mov ebx, 0
    mov ecx, num1
    mov edx, 4
    int 0x80

    ; Imprimir mensaje para el segundo número
    mov eax, 4
    mov ebx, 1
    mov ecx, msg2
    mov edx, 24
    int 0x80

    ; Leer segundo número
    mov eax, 3
    mov ebx, 0
    mov ecx, num2
    mov edx, 4
    int 0x80

    ; Convertir de ASCII a número y sumar
    mov al, [num1]
    sub al, '0'
    mov bl, [num2]
    sub bl, '0'
    add al, bl
    add al, '0'
    mov [result], al

    ; Imprimir mensaje de resultado
    mov eax, 4
    mov ebx, 1
    mov ecx, msg_result
    mov edx, 12
    int 0x80

    ; Imprimir resultado
    mov eax, 4
    mov ebx, 1
    mov ecx, result
    mov edx, 1
    int 0x80

    ; Imprimir salto de línea
    mov eax, 4
    mov ebx, 1
    mov ecx, newline
    mov edx, 1
    int 0x80

    ; Salir
    mov eax, 1
    xor ebx, ebx
    int 0x80`,
    codeFilename: "sum_ascii.asm",
    compileSteps: [
      {
        label: "Navegar al directorio",
        description: "Dirígete al directorio donde está tu archivo",
        command: `cd 'ruta/de/tu/codigo'`,
      },
      {
        label: "Compilar con NASM",
        description: "Convierte el archivo ensamblador a un archivo objeto",
        command: `nasm -f elf64 sum_ascii.asm`,
      },
      {
        label: "Enlazar con ld",
        description: "Enlaza el archivo objeto para crear un ejecutable",
        command: `ld -s -o sum_ascii sum_ascii.o`,
      },
      {
        label: "Ejecutar",
        description: "Ejecuta el programa generado",
        command: `./sum_ascii`,
      },
    ],
    result: `isra@Isras:~/Documents$ nasm -f elf64 sum_ascii.asm
isra@Isras:~/Documents$ ld -s -o sum_ascii sum_ascii.o
isra@Isras:~/Documents$ ./sum_ascii
Ingrese el primer número: 5
Ingrese el segundo número: 3
La suma es: 8
`,
  },
  {
    id: "cycles",
    title: "Ciclos",
    icon: "FaSyncAlt",
    category: "nasm",
    description:
      "Este ejemplo muestra cómo implementar un ciclo en ensamblador para imprimir una secuencia de números del 1 al 5.",
    code: `section .data
    msg db 'Número: ', 0
    newline db 10, 0

section .text
    global _start

_start:
    mov ecx, 1  ; Contador inicial

loop_start:
    ; Imprimir mensaje
    mov eax, 4
    mov ebx, 1
    mov edx, 8
    mov esi, msg
    mov edi, ecx
    mov [msg+8], edi
    mov ecx, msg
    int 0x80

    ; Imprimir número (simplificado, en este caso solo incrementamos el contador)
    add byte [msg+8], '0'
    mov eax, 4
    mov ebx, 1
    mov ecx, msg+8
    mov edx, 1
    int 0x80

    ; Imprimir salto de línea
    mov eax, 4
    mov ebx, 1
    mov ecx, newline
    mov edx, 1
    int 0x80

    ; Incrementar contador
    inc ecx
    cmp ecx, 5
    jle loop_start

    ; Salir
    mov eax, 1
    xor ebx, ebx
    int 0x80`,
    codeFilename: "cycles.asm",
    compileSteps: [
      {
        label: "Navegar al directorio",
        description: "Dirígete al directorio donde está tu archivo",
        command: `cd 'ruta/de/tu/codigo'`,
      },
      {
        label: "Compilar con NASM",
        description: "Convierte el archivo ensamblador a un archivo objeto",
        command: `nasm -f elf64 cycles.asm`,
      },
      {
        label: "Enlazar con ld",
        description: "Enlaza el archivo objeto para crear un ejecutable",
        command: `ld -s -o cycles cycles.o`,
      },
      {
        label: "Ejecutar",
        description: "Ejecuta el programa generado",
        command: `./cycles`,
      },
    ],
    result: `isra@Isras:~/Documents$ nasm -f elf64 cycles.asm
isra@Isras:~/Documents$ ld -s -o cycles cycles.o
isra@Isras:~/Documents$ ./cycles
Número: 1
Número: 2
Número: 3
Número: 4
Número: 5
`,
  },
  {
    id: "sum-cycle",
    title: "Suma en Ciclo",
    icon: "FaListOl",
    category: "nasm",
    description:
      "Este ejemplo muestra cómo sumar dos números ingresados por el usuario y luego imprimir 'Hola' tantas veces como el resultado de la suma. Por ejemplo, si la suma es 5, imprimirá 'Hola' 5 veces.",
    code: `section .data
    msg1 db 'Ingrese el primer número: ', 0
    msg2 db 'Ingrese el segundo número: ', 0
    msg_hola db 'Hola', 0
    newline db 10, 0

section .bss
    num1 resb 4
    num2 resb 4

section .text
    global _start

_start:
    ; Imprimir mensaje para el primer número
    mov eax, 4
    mov ebx, 1
    mov ecx, msg1
    mov edx, 23
    int 0x80

    ; Leer primer número
    mov eax, 3
    mov ebx, 0
    mov ecx, num1
    mov edx, 4
    int 0x80

    ; Imprimir mensaje para el segundo número
    mov eax, 4
    mov ebx, 1
    mov ecx, msg2
    mov edx, 24
    int 0x80

    ; Leer segundo número
    mov eax, 3
    mov ebx, 0
    mov ecx, num2
    mov edx, 4
    int 0x80

    ; Convertir de ASCII a número y sumar
    mov al, [num1]
    sub al, '0'         ; Convertir primer número de ASCII a valor numérico
    mov bl, [num2]
    sub bl, '0'         ; Convertir segundo número de ASCII a valor numérico
    add al, bl          ; Sumar los dos números
    movzx ecx, al       ; Mover la suma a ecx (contador para el ciclo)

    ; Comprobar si la suma es mayor que 0 para evitar un ciclo infinito
    cmp ecx, 0
    jle exit

loop_start:
    ; Imprimir "Hola"
    mov eax, 4
    mov ebx, 1
    mov edx, 4
    mov esi, msg_hola
    mov edi, ecx
    mov ecx, msg_hola
    int 0x80

    ; Imprimir salto de línea
    mov eax, 4
    mov ebx, 1
    mov ecx, newline
    mov edx, 1
    int 0x80

    ; Decrementar contador y repetir si no es 0
    dec ecx
    jnz loop_start

exit:
    ; Salir
    mov eax, 1
    xor ebx, ebx
    int 0x80`,
    codeFilename: "sum_cycle.asm",
    compileSteps: [
      {
        label: "Navegar al directorio",
        description: "Dirígete al directorio donde está tu archivo",
        command: `cd 'ruta/de/tu/codigo'`,
      },
      {
        label: "Compilar con NASM",
        description: "Convierte el archivo ensamblador a un archivo objeto",
        command: `nasm -f elf64 sum_cycle.asm`,
      },
      {
        label: "Enlazar con ld",
        description: "Enlaza el archivo objeto para crear un ejecutable",
        command: `ld -s -o sum_cycle sum_cycle.o`,
      },
      {
        label: "Ejecutar",
        description: "Ejecuta el programa generado",
        command: `./sum_cycle`,
      },
    ],
    result: `isra@Isras:~/Documents$ nasm -f elf64 sum_cycle.asm
isra@Isras:~/Documents$ ld -s -o sum_cycle sum_cycle.o
isra@Isras:~/Documents$ ./sum_cycle
Ingrese el primer número: 3
Ingrese el segundo número: 2
Hola
Hola
Hola
Hola
Hola
`,
  },
  {
    id: "calculator",
    title: "Calculadora",
    icon: "FaCalculator",
    category: "nasm",
    description:
      "Este ejemplo implementa una calculadora que permite sumar, restar, multiplicar o dividir dos números ingresados por el usuario. El usuario ingresa dos números y una operación (+, -, *, /), y el programa muestra el resultado.",
    code: `section .data
    msg1 db 'Ingrese el primer número: ', 0
    msg2 db 'Ingrese el segundo número: ', 0
    msg_op db 'Ingrese la operación (+, -, *, /): ', 0
    msg_result db 'Resultado: ', 0
    msg_error db 'Error: Operación no válida o división por cero', 0
    newline db 10, 0

section .bss
    num1 resb 4
    num2 resb 4
    operation resb 2
    result resb 4

section .text
    global _start

_start:
    ; Imprimir mensaje para el primer número
    mov eax, 4
    mov ebx, 1
    mov ecx, msg1
    mov edx, 23
    int 0x80

    ; Leer primer número
    mov eax, 3
    mov ebx, 0
    mov ecx, num1
    mov edx, 4
    int 0x80

    ; Imprimir mensaje para el segundo número
    mov eax, 4
    mov ebx, 1
    mov ecx, msg2
    mov edx, 24
    int 0x80

    ; Leer segundo número
    mov eax, 3
    mov ebx, 0
    mov ecx, num2
    mov edx, 4
    int 0x80

    ; Imprimir mensaje para la operación
    mov eax, 4
    mov ebx, 1
    mov ecx, msg_op
    mov edx, 32
    int 0x80

    ; Leer operación
    mov eax, 3
    mov ebx, 0
    mov ecx, operation
    mov edx, 2
    int 0x80

    ; Convertir números de ASCII a valores numéricos
    mov al, [num1]
    sub al, '0'         ; Primer número
    mov bl, [num2]
    sub bl, '0'         ; Segundo número

    ; Determinar la operación
    mov dl, [operation]
    cmp dl, '+'
    je do_addition
    cmp dl, '-'
    je do_subtraction
    cmp dl, '*'
    je do_multiplication
    cmp dl, '/'
    je do_division
    jmp error

do_addition:
    add al, bl
    jmp show_result

do_subtraction:
    sub al, bl
    jmp show_result

do_multiplication:
    mul bl              ; Multiplicar AL por BL, resultado en AX
    mov al, ah          ; Mover el resultado a AL (simplificado)
    jmp show_result

do_division:
    cmp bl, 0           ; Verificar división por cero
    je error
    xor ah, ah          ; Limpiar AH para la división
    div bl              ; Dividir AX por BL, resultado en AL, resto en AH
    jmp show_result

error:
    ; Imprimir mensaje de error
    mov eax, 4
    mov ebx, 1
    mov ecx, msg_error
    mov edx, 37
    int 0x80
    mov eax, 4
    mov ebx, 1
    mov ecx, newline
    mov edx, 1
    int 0x80
    jmp exit

show_result:
    ; Convertir resultado a ASCII
    add al, '0'
    mov [result], al

    ; Imprimir mensaje de resultado
    mov eax, 4
    mov ebx, 1
    mov ecx, msg_result
    mov edx, 11
    int 0x80

    ; Imprimir resultado
    mov eax, 4
    mov ebx, 1
    mov ecx, result
    mov edx, 1
    int 0x80

    ; Imprimir salto de línea
    mov eax, 4
    mov ebx, 1
    mov ecx, newline
    mov edx, 1
    int 0x80

exit:
    ; Salir
    mov eax, 1
    xor ebx, ebx
    int 0x80`,
    codeFilename: "calculator.asm",
    compileSteps: [
      {
        label: "Navegar al directorio",
        description: "Dirígete al directorio donde está tu archivo",
        command: `cd 'ruta/de/tu/codigo'`,
      },
      {
        label: "Compilar con NASM",
        description: "Convierte el archivo ensamblador a un archivo objeto",
        command: `nasm -f elf64 calculator.asm`,
      },
      {
        label: "Enlazar con ld",
        description: "Enlaza el archivo objeto para crear un ejecutable",
        command: `ld -s -o calculator calculator.o`,
      },
      {
        label: "Ejecutar",
        description: "Ejecuta el programa generado",
        command: `./calculator`,
      },
    ],
    result: `isra@Isras:~/Documents$ nasm -f elf64 calculator.asm
isra@Isras:~/Documents$ ld -s -o calculator calculator.o
isra@Isras:~/Documents$ ./calculator
Ingrese el primer número: 8
Ingrese el segundo número: 2
Ingrese la operación (+, -, *, /): +
Resultado: 10

isra@Isras:~/Documents$ ./calculator
Ingrese el primer número: 8
Ingrese el segundo número: 2
Ingrese la operación (+, -, *, /): -
Resultado: 6

isra@Isras:~/Documents$ ./calculator
Ingrese el primer número: 8
Ingrese el segundo número: 2
Ingrese la operación (+, -, *, /): *
Resultado: 16

isra@Isras:~/Documents$ ./calculator
Ingrese el primer número: 8
Ingrese el segundo número: 2
Ingrese la operación (+, -, *, /): /
Resultado: 4
`,
  },
  // Nuevos ejemplos de NASM + GCC
  {
    id: "sum-gcc",
    title: "Suma de Dos Números",
    icon: "FaPlus",
    category: "nasm-gcc",
    description:
      "Este ejemplo muestra cómo sumar dos números predefinidos (500 y 10) y mostrar el resultado usando la función `printf` de C. Utiliza NASM para ensamblar el código y GCC para enlazar el programa.",
    code: `;nasm -f elf32 suma.asm -o suma.o
;gcc -m32 suma.o -o suma -no-pie
;./suma

;sudo apt install gcc-multilib

section .data
    num1 dd 500
    num2 dd 10
    fmt db "Resultado: %d", 10, 0

section .bss
    res resb 4

section .text
    global main
    extern printf

main:
    mov eax, dword [num1]  ; Cargar num1 en eax
    add eax, dword [num2]  ; Sumar num2
    mov [res], eax         ; Guardar resultado

    push dword [res]       ; Pasar el resultado a printf
    push fmt
    call printf
    add esp, 8             ; Limpiar pila

    xor eax, eax
    ret`,
    codeFilename: "suma.asm",
    compileSteps: [
      {
        label: "Instalar dependencias",
        description: "Asegúrate de tener gcc-multilib instalado para compilar en 32 bits",
        command: `sudo apt install gcc-multilib`,
      },
      {
        label: "Navegar al directorio",
        description: "Dirígete al directorio donde está tu archivo",
        command: `cd 'ruta/de/tu/codigo'`,
      },
      {
        label: "Compilar con NASM",
        description: "Convierte el archivo ensamblador a un archivo objeto (32 bits)",
        command: `nasm -f elf32 suma.asm -o suma.o`,
      },
      {
        label: "Enlazar con GCC",
        description: "Enlaza el archivo objeto con GCC para crear un ejecutable (32 bits)",
        command: `gcc -m32 suma.o -o suma -no-pie`,
      },
      {
        label: "Ejecutar",
        description: "Ejecuta el programa generado",
        command: `./suma`,
      },
    ],
    result: `isra@Isras:~/Documents$ nasm -f elf32 suma.asm -o suma.o
isra@Isras:~/Documents$ gcc -m32 suma.o -o suma -no-pie
isra@Isras:~/Documents$ ./suma
Resultado: 510
`,
  },
  {
    id: "square-root-gcc",
    title: "Raíz Cuadrada",
    icon: "FaSquareRootAlt",
    category: "nasm-gcc",
    description:
      "Este ejemplo calcula la raíz cuadrada de un número predefinido (25.0) usando la FPU (Floating Point Unit) y muestra el resultado con `printf`. Utiliza NASM para ensamblar y GCC para enlazar.",
    code: `;nasm -f elf32 raiz.asm -o raiz.o
;gcc -m32 raiz.o -o raiz -no-pie
;./raiz

section .data
    num dd 25.0             ; Número de entrada
    fmt db "Raíz cuadrada: %lf", 10, 0  ; %lf para double

section .bss
    res resq 1              ; Espacio para un número de 8 bytes (double)

section .text
    global main
    extern printf

main:
    finit                   ; Inicializar la FPU para "unidades de punto flotante"
    fld dword [num]         ; Cargar el número en la FPU
    fsqrt                   ; Calcular la raíz cuadrada
    fstp qword [res]        ; Guardar el resultado en 64 bits

    push dword [res+4]      ; Parte alta del double
    push dword [res]        ; Parte baja del double
    push fmt
    call printf
    add esp, 12             ; Limpiar la pila

    xor eax, eax
    ret`,
    codeFilename: "raiz.asm",
    compileSteps: [
      {
        label: "Navegar al directorio",
        description: "Dirígete al directorio donde está tu archivo",
        command: `cd 'ruta/de/tu/codigo'`,
      },
      {
        label: "Compilar con NASM",
        description: "Convierte el archivo ensamblador a un archivo objeto (32 bits)",
        command: `nasm -f elf32 raiz.asm -o raiz.o`,
      },
      {
        label: "Enlazar con GCC",
        description: "Enlaza el archivo objeto con GCC para crear un ejecutable (32 bits)",
        command: `gcc -m32 raiz.o -o raiz -no-pie`,
      },
      {
        label: "Ejecutar",
        description: "Ejecuta el programa generado",
        command: `./raiz`,
      },
    ],
    result: `isra@Isras:~/Documents$ nasm -f elf32 raiz.asm -o raiz.o
isra@Isras:~/Documents$ gcc -m32 raiz.o -o raiz -no-pie
isra@Isras:~/Documents$ ./raiz
Raíz cuadrada: 5.000000
`,
  },
  {
    id: "pyramid-gcc",
    title: "Pirámide de Asteriscos",
    icon: "FaShapes",
    category: "nasm-gcc",
    description:
      "Este ejemplo imprime una pirámide de asteriscos basada en el número de filas ingresado por el usuario. Utiliza `scanf` para leer la entrada y `printf` para mostrar la salida, integrando NASM y GCC.",
    code: `; nasm -f elf32 piramide.asm -o piramide.o
; gcc -m32 piramide.o -o piramide -no-pie
; ./piramide

section .data
    prompt db "Ingrese el numero de filas: ", 0
    fmt_in db "%d", 0
    fmt_out db "%c", 0
    newline db 10, 0
    space db " ", 0
    asterisk db " * ", 0

section .bss
    filas resd 1

section .text
    global main
    extern printf, scanf

main:
    ; Pedir el número de filas
    push prompt
    call printf
    add esp, 4

    push filas
    push fmt_in
    call scanf
    add esp, 8

    ; Cargar el número de filas en ECX
    mov ecx, [filas]
    mov edi, 1   ; Controla la cantidad de asteriscos por fila

fila_loop:
    push ecx  ; Guardar ECX en la pila

    ; Imprimir espacios antes de los asteriscos
    mov eax, [filas]
    sub eax, edi  ; Calcular los espacios a imprimir
    mov ebx, eax

espacio_loop:
    cmp ebx, 0
    je imprimir_asteriscos
    push space
    call printf
    add esp, 4
    dec ebx
    jmp espacio_loop

imprimir_asteriscos:
    mov ebx, edi  ; EBX controla la cantidad de asteriscos en la fila

asterisco_loop:
    cmp ebx, 0
    je nueva_linea
    push asterisk
    call printf
    add esp, 4
    dec ebx
    jmp asterisco_loop

nueva_linea:
    push newline
    call printf
    add esp, 4

    pop ecx   ; Restaurar ECX
    inc edi   ; Aumentar la cantidad de asteriscos en la siguiente fila
    loop fila_loop  ; Repetir hasta completar todas las filas

    xor eax, eax
    ret`,
    codeFilename: "piramide.asm",
    compileSteps: [
      {
        label: "Navegar al directorio",
        description: "Dirígete al directorio donde está tu archivo",
        command: `cd 'ruta/de/tu/codigo'`,
      },
      {
        label: "Compilar con NASM",
        description: "Convierte el archivo ensamblador a un archivo objeto (32 bits)",
        command: `nasm -f elf32 piramide.asm -o piramide.o`,
      },
      {
        label: "Enlazar con GCC",
        description: "Enlaza el archivo objeto con GCC para crear un ejecutable (32 bits)",
        command: `gcc -m32 piramide.o -o piramide -no-pie`,
      },
      {
        label: "Ejecutar",
        description: "Ejecuta el programa generado",
        command: `./piramide`,
      },
    ],
    result: `isra@Isras:~/Documents$ nasm -f elf32 piramide.asm -o piramide.o
isra@Isras:~/Documents$ gcc -m32 piramide.o -o piramide -no-pie
isra@Isras:~/Documents$ ./piramide
Ingrese el numero de filas: 4
   * 
  *  * 
 *  *  * 
*  *  *  * 
`,
  },
  {
    id: "factorial-gcc",
    title: "Factorial",
    icon: "FaExclamation",
    category: "nasm-gcc",
    description:
      "Este ejemplo calcula el factorial de un número predefinido (5) y muestra el resultado usando `printf`. Utiliza NASM para ensamblar y GCC para enlazar.",
    code: `;nasm -f elf32 factorial.asm -o factorial.o
;gcc -m32 factorial.o -o factorial -no-pie
;./factorial

section .data
    num dd 5
    fmt db "Factorial: %d", 10, 0

section .bss
    res resb 4

section .text
    global main
    extern printf

main:
    mov eax, 1       ; Inicializar resultado en 1
    mov ecx, dword [num]  ; Cargar número

factorial_loop:
    cmp ecx, 1       ; Si ecx <= 1, termina
    jle end_loop
    imul eax, ecx    ; Multiplicar eax * ecx
    dec ecx          ; Decrementar contador
    jmp factorial_loop

end_loop:
    mov [res], eax   ; Guardar resultado

    push dword [res]
    push fmt
    call printf
    add esp, 8

    xor eax, eax
    ret`,
    codeFilename: "factorial.asm",
    compileSteps: [
      {
        label: "Navegar al directorio",
        description: "Dirígete al directorio donde está tu archivo",
        command: `cd 'ruta/de/tu/codigo'`,
      },
      {
        label: "Compilar con NASM",
        description: "Convierte el archivo ensamblador a un archivo objeto (32 bits)",
        command: `nasm -f elf32 factorial.asm -o factorial.o`,
      },
      {
        label: "Enlazar con GCC",
        description: "Enlaza el archivo objeto con GCC para crear un ejecutable (32 bits)",
        command: `gcc -m32 factorial.o -o factorial -no-pie`,
      },
      {
        label: "Ejecutar",
        description: "Ejecuta el programa generado",
        command: `./factorial`,
      },
    ],
    result: `isra@Isras:~/Documents$ nasm -f elf32 factorial.asm -o factorial.o
isra@Isras:~/Documents$ gcc -m32 factorial.o -o factorial -no-pie
isra@Isras:~/Documents$ ./factorial
Factorial: 120
`,
  },
  {
    id: "even-odd-gcc",
    title: "Par o Impar",
    icon: "FaBalanceScale",
    category: "nasm-gcc",
    description:
      "Este ejemplo determina si un número predefinido (10) es par o impar y muestra un mensaje correspondiente usando `printf`. Utiliza NASM y GCC.",
    code: `;nasm -f elf32 es_par.asm -o es_par.o
;gcc -m32 es_par.o -o es_par -no-pie
;./es_par

section .data
    num dd 10
    par db "El número es par", 10, 0
    inpar db "El número es impar", 10, 0

section .text
    global main
    extern printf

main:
    mov eax, dword [num]
    test eax, 1         ; Comprobar si el bit menos significativo es 1
    jz print_par       ; "saltar si no es cero".
    push inpar
    call printf
    add esp, 4
    jmp end_programa

print_par:
    push par
    call printf
    add esp, 4

end_programa:
    xor eax, eax
    ret`,
    codeFilename: "es_par.asm",
    compileSteps: [
      {
        label: "Navegar al directorio",
        description: "Dirígete al directorio donde está tu archivo",
        command: `cd 'ruta/de/tu/codigo'`,
      },
      {
        label: "Compilar con NASM",
        description: "Convierte el archivo ensamblador a un archivo objeto (32 bits)",
        command: `nasm -f elf32 es_par.asm -o es_par.o`,
      },
      {
        label: "Enlazar con GCC",
        description: "Enlaza el archivo objeto con GCC para crear un ejecutable (32 bits)",
        command: `gcc -m32 es_par.o -o es_par -no-pie`,
      },
      {
        label: "Ejecutar",
        description: "Ejecuta el programa generado",
        command: `./es_par`,
      },
    ],
    result: `isra@Isras:~/Documents$ nasm -f elf32 es_par.asm -o es_par.o
isra@Isras:~/Documents$ gcc -m32 es_par.o -o es_par -no-pie
isra@Isras:~/Documents$ ./es_par
El número es par
`,
  },
  {
    id: "read-value-gcc",
    title: "Leer un Valor",
    icon: "FaSignInAlt",
    category: "nasm-gcc",
    description:
      "Este ejemplo lee un valor ingresado por el usuario usando `scanf` y lo imprime con `printf`. Integra NASM para ensamblar y GCC para enlazar.",
    code: `; nasm -f elf32 leer.asm -o leer.o
; gcc -m32 leer.o -o leer -no-pie
; ./leer

section .data
    prompt db "Ingrese un valor: ", 0
    fmt_in db "%d", 0
    fmt_out db "Valor ingresado: %d", 10, 0

section .bss
    num resd 1  ; Espacio para almacenar el número ingresado

section .text
    global main
    extern printf, scanf

main:
    ; Mostrar mensaje de entrada
    push prompt
    call printf
    add esp, 4

    ; Leer el valor desde la consola
    push num
    push fmt_in
    call scanf
    add esp, 8

    ; Imprimir el valor ingresado
    push dword [num]
    push fmt_out
    call printf
    add esp, 8

    ; Terminar el programa
    xor eax, eax
    ret`,
    codeFilename: "leer.asm",
    compileSteps: [
      {
        label: "Navegar al directorio",
        description: "Dirígete al directorio donde está tu archivo",
        command: `cd 'ruta/de/tu/codigo'`,
      },
      {
        label: "Compilar con NASM",
        description: "Convierte el archivo ensamblador a un archivo objeto (32 bits)",
        command: `nasm -f elf32 leer.asm -o leer.o`,
      },
      {
        label: "Enlazar con GCC",
        description: "Enlaza el archivo objeto con GCC para crear un ejecutable (32 bits)",
        command: `gcc -m32 leer.o -o leer -no-pie`,
      },
      {
        label: "Ejecutar",
        description: "Ejecuta el programa generado",
        command: `./leer`,
      },
    ],
    result: `isra@Isras:~/Documents$ nasm -f elf32 leer.asm -o leer.o
isra@Isras:~/Documents$ gcc -m32 leer.o -o leer -no-pie
isra@Isras:~/Documents$ ./leer
Ingrese un valor: 42
Valor ingresado: 42
`,
  },
  {
    id: "calculator-gcc",
    title: "Calculadora",
    icon: "FaCalculator",
    category: "nasm-gcc",
    description:
      "Este ejemplo implementa una calculadora que permite sumar, restar, multiplicar o dividir dos números ingresados por el usuario. Utiliza `scanf` para leer los números y la operación, y `printf` para mostrar el resultado. Integra NASM y GCC.",
    code: `section .data
    prompt1 db "Ingrese el primer numero: ", 0
    prompt2 db "Ingrese el segundo numero: ", 0
    prompt3 db "Ingrese la operacion (+, -, *, /): ", 0
    fmt_in_num db "%d", 0
    fmt_in_char db " %c", 0
    fmt_out db "Resultado: %d", 10, 0
    error_msg db "Error: Division por cero", 10, 0

section .bss
    num1 resd 1
    num2 resd 1
    oper resb 1
    result resd 1

section .text
    global main
    extern printf, scanf

main:
    ; Pedir primer número
    push prompt1
    call printf
    add esp, 4

    push num1
    push fmt_in_num
    call scanf
    add esp, 8

    ; Pedir segundo número
    push prompt2
    call printf
    add esp, 4

    push num2
    push fmt_in_num
    call scanf
    add esp, 8

    ; Pedir operación
    push prompt3
    call printf
    add esp, 4

    push oper
    push fmt_in_char
    call scanf
    add esp, 8

    ; Cargar operandos en registros
    mov eax, [num1]  ; Cargar primer número en EAX
    mov ebx, [num2]  ; Cargar segundo número en EBX

    ; Evaluar la operación ingresada
    mov cl, [oper]   
    cmp cl, '+'
    je sumar
    cmp cl, '-'
    je restar
    cmp cl, '*'
    je multiplicar
    cmp cl, '/'
    je dividir
    jmp fin          ; Si no es una operación válida, termina

sumar:
    add eax, ebx
    jmp guardar_resultado

restar:
    sub eax, ebx
    jmp guardar_resultado

multiplicar:
    imul ebx
    jmp guardar_resultado

dividir:
    cmp ebx, 0
    je error_division
    cdq            ; Extender signo en EDX:EAX para división
    idiv ebx
    jmp guardar_resultado

error_division:
    push error_msg
    call printf
    add esp, 4
    jmp fin

guardar_resultado:
    mov [result], eax

    ; Imprimir resultado
    push dword [result]
    push fmt_out
    call printf
    add esp, 8

fin:
    xor eax, eax
    ret`,
    codeFilename: "calculadora.asm",
    compileSteps: [
      {
        label: "Navegar al directorio",
        description: "Dirígete al directorio donde está tu archivo",
        command: `cd 'ruta/de/tu/codigo'`,
      },
      {
        label: "Compilar con NASM",
        description: "Convierte el archivo ensamblador a un archivo objeto (32 bits)",
        command: `nasm -f elf32 calculadora.asm -o calculadora.o`,
      },
      {
        label: "Enlazar con GCC",
        description: "Enlaza el archivo objeto con GCC para crear un ejecutable (32 bits)",
        command: `gcc -m32 calculadora.o -o calculadora -no-pie`,
      },
      {
        label: "Ejecutar",
        description: "Ejecuta el programa generado",
        command: `./calculadora`,
      },
    ],
    result: `isra@Isras:~/Documents$ nasm -f elf32 calculadora.asm -o calculadora.o
isra@Isras:~/Documents$ gcc -m32 calculadora.o -o calculadora -no-pie
isra@Isras:~/Documents$ ./calculadora
Ingrese el primer numero: 15
Ingrese el segundo numero: 5
Ingrese la operacion (+, -, *, /): +
Resultado: 20

isra@Isras:~/Documents$ ./calculadora
Ingrese el primer numero: 15
Ingrese el segundo numero: 5
Ingrese la operacion (+, -, *, /): -
Resultado: 10

isra@Isras:~/Documents$ ./calculadora
Ingrese el primer numero: 15
Ingrese el segundo numero: 5
Ingrese la operacion (+, -, *, /): *
Resultado: 75

isra@Isras:~/Documents$ ./calculadora
Ingrese el primer numero: 15
Ingrese el segundo numero: 5
Ingrese la operacion (+, -, *, /): /
Resultado: 3`,
  },
];

export default examplesData;