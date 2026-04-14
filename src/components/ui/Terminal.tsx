import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, X, ChevronRight } from 'lucide-react';

const COMMANDS = {
  help: 'Available commands: about, education, skills, contact, clear, projects',
  about: 'Janakeesh Hegde - Full Stack MERN Developer & ISE Student.',
  education: 'B.E. (2022-26), Diploma (2019-22), PUC (2017-19), SSLC (2016-17).',
  skills: 'Frontend: HTML, CSS, JS, React. Backend: Node.js, Python. DB: MongoDB, MySQL. Tools: Git, VS Code.',
  projects: 'I have built various projects like AI-powered platforms and scalable websites.',
  contact: 'Email: janakeeshdanmav@gmail.com | Phone: +91 80886 53820 | LinkedIn: janakeeshhegde',
};

export const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(['Welcome to Janakeesh\'s interactive terminal.', 'Type "help" to see available commands.']);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    const newHistory = [...history, `> ${input}`];

    if (cmd === 'clear') {
      setHistory([]);
    } else if (cmd in COMMANDS) {
      newHistory.push(COMMANDS[cmd as keyof typeof COMMANDS]);
      setHistory(newHistory);
    } else if (cmd !== '') {
      newHistory.push(`Command not found: ${cmd}. Type "help" for assistance.`);
      setHistory(newHistory);
    }

    setInput('');
  };

  return (
    <div className="w-full max-w-2xl mx-auto glass rounded-xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Terminal Header */}
      <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-2">
          <TerminalIcon size={16} className="text-slate-400" />
          <span className="text-xs font-medium text-slate-400 font-mono">janakeesh@portfolio: ~</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={scrollRef}
        className="p-6 h-64 overflow-y-auto font-mono text-sm space-y-2 scrollbar-hide"
      >
        {history.map((line, i) => (
          <div key={i} className={line.startsWith('>') ? 'text-purple-400' : 'text-slate-300'}>
            {line}
          </div>
        ))}
        <form onSubmit={handleCommand} className="flex items-center gap-2">
          <ChevronRight size={14} className="text-purple-400" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-slate-300 placeholder:text-slate-600"
            autoFocus
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
};
