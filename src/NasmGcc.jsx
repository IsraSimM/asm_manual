import CodeBlock from './components/CodeBlock';

export default function NasmGcc() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
        Assembly - NASM + GCC
      </h1>
      <p className="text-lg opacity-80 mb-6 leading-relaxed" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
        En esta sección, aprenderás a combinar NASM con GCC para compilar y enlazar programas en ensamblador. Usar GCC como enlazador te permite aprovechar las bibliotecas estándar de C y simplificar el proceso de enlace, especialmente en programas más complejos. A continuación, te mostramos un ejemplo básico de cómo hacerlo.
      </p>

      <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
        Ejemplo: Hola Mundo con NASM y GCC
      </h2>
      <p className="opacity-80 mb-4 leading-relaxed" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
        Este es un programa simple en ensamblador que imprime "Hello, world!" en la consola. Aunque el código es similar al que usamos con NASM solo, aquí usaremos GCC para enlazar el archivo objeto en lugar de `ld`.
      </p>
      <CodeBlock filename="hello.asm">{`section .text
    global _start

_start:
    ; write(1, msg, 13)
    mov eax, 4
    mov ebx, 1
    mov ecx, msg
    mov edx, 13
    int 0x80

    ; exit(0)
    mov eax, 1
    mov ebx, 0
    int 0x80

section .data
    msg db 'Hello, world!', 0`}</CodeBlock>

      <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
        Compilar y ejecutar
      </h2>
      <p className="opacity-80 mb-4 leading-relaxed" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
        Sigue estos pasos para compilar y ejecutar el programa usando NASM y GCC:
      </p>
      <ul className="list-disc pl-6 mb-6 opacity-80" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
        <li>
          <span className="font-semibold">Compilar con NASM:</span> Convierte el archivo ensamblador a un archivo objeto:
          <code className="bg-gray-200 p-1 rounded mx-1">nasm -f elf64 hello.asm</code>
        </li>
        <li>
          <span className="font-semibold">Enlazar con GCC:</span> Usa GCC para enlazar el archivo objeto y crear un ejecutable:
          <code className="bg-gray-200 p-1 rounded mx-1">gcc -s -o hello hello.o</code>
        </li>
        <li>
          <span className="font-semibold">Ejecutar:</span> Ejecuta el programa generado:
          <code className="bg-gray-200 p-1 rounded mx-1">./hello</code>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
        Ventajas de usar GCC con NASM
      </h2>
      <p className="opacity-80 mb-4 leading-relaxed" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
        Usar GCC como enlazador tiene varias ventajas:
      </p>
      <ul className="list-disc pl-6 mb-6 opacity-80" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
        <li>
          <span className="font-semibold">Acceso a bibliotecas de C:</span> Puedes vincular tu código ensamblador con funciones de la biblioteca estándar de C, como `printf` o `scanf`, si las llamas desde ensamblador.
        </li>
        <li>
          <span className="font-semibold">Compatibilidad:</span> GCC simplifica el enlace en diferentes plataformas, especialmente si estás trabajando en un proyecto que combina ensamblador y C.
        </li>
        <li>
          <span className="font-semibold">Depuración:</span> GCC puede generar información de depuración que puedes usar con herramientas como GDB.
        </li>
      </ul>
    </div>
  );
}