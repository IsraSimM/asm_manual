import CodeBlock from './CodeBlock';

export default function ExampleTemplate({
    title,
    description,
    code,
    codeFilename,
    compileSteps,
    result,
}) {
    return (
        <div>
            <h1
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "'Darker Grotesque', sans-serif" }}
            >
                {title}
            </h1>
            <p
                className="text-lg mb-6 leading-relaxed"
                style={{ fontFamily: "'Darker Grotesque', sans-serif" }}
            >
                {description}
            </p>
            <h2
                className="text-2xl font-semibold mb-3"
                style={{ fontFamily: "'Darker Grotesque', sans-serif" }}
            >
                Código
            </h2>
            <CodeBlock code={code} filename={codeFilename} />
            <h2
                className="text-2xl font-semibold mb-3 mt-6"
                style={{ fontFamily: "'Darker Grotesque', sans-serif" }}
            >
                Pasos para compilar
            </h2>
            <ol className="list-decimal list-inside mb-6">
                {compileSteps.map((step, index) => (
                    <li key={index} className="mb-2">
                        <span
                            className="font-semibold"
                            style={{ fontFamily: "'Darker Grotesque', sans-serif" }}
                        >
                            {step.label}:
                        </span>{' '}
                        <span style={{ fontFamily: "'Darker Grotesque', sans-serif" }}>
                            {step.description}
                        </span>
                        <h2>
                            <CodeBlock code={step.command} filename={"Bash"} />
                        </h2>
                    </li>
                ))}
            </ol>
            <h2
                className="text-2xl font-semibold mb-3"
                style={{ fontFamily: "'Darker Grotesque', sans-serif" }}
            >
                Resultado
            </h2>
            <h2>
                <CodeBlock code={result} filename={"Bash"} />
            </h2>
        </div>
    );
}