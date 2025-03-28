import CodeBlock from './components/CodeBlock';

export default function Nasm() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
        Assembly - NASM
      </h1>
      <p className="text-lg opacity-80 mb-6 leading-relaxed" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
        NASM (Netwide Assembler) es un ensamblador popular para arquitecturas x86 y x86-64. A continuación, te mostramos los requisitos básicos para empezar a usarlo, junto con un ejemplo simple de cómo escribir, compilar y ejecutar un programa en ensamblador.
      </p>

      <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
        Requisitos para usar NASM
      </h2>
      <ul className="list-disc pl-6 mb-6 opacity-80" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
        <li>
          <span className="font-semibold">Instalar NASM:</span> Puedes instalar NASM en sistemas basados en Debian/Ubuntu con el siguiente comando:
          <code className="bg-gray-200 p-1 rounded mx-1">sudo apt install nasm</code>
        </li>
        <li>
          <span className="font-semibold">Sistema operativo:</span> NASM es compatible con Linux, Windows y macOS. En Windows, puedes usar un subsistema como WSL o instalar NASM directamente.
        </li>
        <li>
          <span className="font-semibold">Editor de texto:</span> Usa un editor como Visual Studio Code, Sublime Text o Vim para escribir tu código.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
        Ejemplo: Hola Mundo en NASM
      </h2>
      <p className="opacity-80 mb-4 leading-relaxed" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
        Este es un ejemplo básico de un programa en ensamblador que imprime "Hello, world!" en la consola usando NASM en Linux:
      </p>
      <CodeBlock filename="hello.asm">{`section .data
    msg db 'Hello, world!', 0

section .text
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
    int 0x80`}</CodeBlock>

      <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
        Compilar y ejecutar
      </h2>
      <p className="opacity-80 mb-4 leading-relaxed" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
        Sigue estos pasos para compilar y ejecutar el programa anterior:
      </p>
      <ul className="list-disc pl-6 mb-6 opacity-80" style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
        <li>
          <span className="font-semibold">Compilar:</span> Convierte el archivo ensamblador a un archivo objeto:
          <code className="bg-gray-200 p-1 rounded mx-1">nasm -f elf64 hello.asm</code>
        </li>
        <li>
          <span className="font-semibold">Enlazar:</span> Enlaza el archivo objeto para crear un ejecutable:
          <code className="bg-gray-200 p-1 rounded mx-1">ld -s -o hello hello.o</code>
        </li>
        <li>
          <span className="font-semibold">Ejecutar:</span> Ejecuta el programa:
          <code className="bg-gray-200 p-1 rounded mx-1">./hello</code>
        </li>
      </ul>
    </div>
  );
}