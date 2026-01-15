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
      {/* Animated code background with premium styling */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6 p-8 h-full">
          {codeSnippets.map((code, index) => (
            <div
              key={index}
              className="text-[#5c39e0] font-mono text-sm md:text-base lg:text-lg font-semibold border border-[#5c39e0]/20 px-3 py-2 rounded-lg bg-gradient-to-br from-[#5c39e0]/5 to-transparent hover:border-[#5c39e0]/40 hover:bg-gradient-to-br hover:from-[#5c39e0]/10 hover:to-transparent transition-all duration-500"
              style={{
                animationDuration: `${4 + (index % 3)}s`,
              }}
            >
              {code}
            </div>
          ))}
        </div>
      </div>

      {/* Floating code elements with smooth animations */}
      <div className="absolute top-10 left-10 opacity-[0.15] text-[#5c39e0] text-4xl font-bold">
        &lt;/&gt;
      </div>
      <div className="absolute top-1/4 right-20 opacity-[0.12] text-[#5c39e0] text-5xl font-bold animate-float">
        {`{ }`}
      </div>
      <div className="absolute bottom-1/3 left-1/4 opacity-[0.15] text-[#5c39e0] text-4xl font-bold">
        &lt;div&gt;
      </div>
      <div className="absolute bottom-10 right-10 opacity-[0.12] text-[#5c39e0] text-5xl font-bold animate-float" style={{ animationDelay: "1s" }}>
        &lt;/div&gt;
      </div>

      {/* Premium gradient blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5246e4]/3 via-transparent to-[#672bdb]/3 pointer-events-none"></div>
      
      {/* Subtle radial gradient overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient pointer-events-none opacity-[0.05]"></div>
    </div>
  );
}
