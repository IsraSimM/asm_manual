import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Dashboard';
import Nasm from '../Nasm';
import NasmGcc from '../NasmGcc';
import ExampleTemplate from './ExampleTemplate';
import Settings from '../Settings';
import About from '../About';
import examplesData from '../data/examplesData';
import DayProgressFooter from './DayProgressFooter';

export default function MainContent() {
  return (
    <main className="main-content p-6 min-h-screen flex flex-col">
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manual" element={<Dashboard />} />
          <Route path="/nasm" element={<Nasm />} />
          <Route path="/nasm-gcc" element={<NasmGcc />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
          {examplesData.map((example) => (
            <Route
              key={example.id}
              path={`/${example.id}`}
              element={
                <ExampleTemplate
                  title={example.title}
                  description={example.description}
                  code={example.code}
                  codeFilename={example.codeFilename}
                  compileSteps={example.compileSteps}
                  result={example.result}
                />
              }
            />
          ))}
        </Routes>
      </div>
      <DayProgressFooter />
    </main>
  );
}
