export default function CodeBackground() {
  const codeSnippets = [
    "const dashboard = {}",
    "<Component />",
    "function render() {}",
    "import { useState }",
    "export default App",
    "className='flex items-center'",
    "const [state, setState]",
    "<div className='bg'>",
    "useEffect(() => {})",
    "return <div>",
    "interface Props {}",
    "async function fetch()",
    "type User = {}",
    ".map(item => item)",
    "const handleClick = () =>",
    "<button onClick={}>",
    "npm install react",
    "yarn add package",
    "console.log('hello')",
    "if (condition) {}",
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated code background */}
      <div className="absolute inset-0 opacity-15">
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6 p-8 h-full">
          {codeSnippets.map((code, index) => (
            <div
              key={index}
              className="text-[#5c39e0] font-mono text-sm md:text-base lg:text-lg font-semibold animate-pulse border border-[#5c39e0]/30 px-3 py-2 rounded"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: `${3 + (index % 3)}s`,
              }}
            >
              {code}
            </div>
          ))}
        </div>
      </div>

      {/* Floating code tags */}
      <div className="absolute top-10 left-10 opacity-20 text-[#5c39e0] text-4xl font-bold">
        &lt;/&gt;
      </div>
      <div className="absolute top-1/4 right-20 opacity-20 text-[#5c39e0] text-5xl font-bold animate-bounce">
        {`{ }`}
      </div>
      <div className="absolute bottom-1/3 left-1/4 opacity-20 text-[#5c39e0] text-4xl font-bold">
        &lt;div&gt;
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 text-[#5c39e0] text-5xl font-bold animate-pulse">
        &lt;/div&gt;
      </div>

      {/* Gradient blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent pointer-events-none"></div>
    </div>
  );
}
