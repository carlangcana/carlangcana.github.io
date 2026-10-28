import { useCallback, useRef, useState } from 'react';
import './App.css';
import TerminalTyping from './Components/TerminalTyping';
import AboutMe from './About/AboutMe';
import Projects from './Projects/Projects';
import Courses from './Courses/Courses';
import Graphics from './Graphics/Graphics';
import Surprise from './Components/Surprise';
import InteractiveBackground from './Components/InteractiveBackground';

const replies = { hello: 'hi', hi: 'hello', carl: 'pogi' };

const sections = { '1': 'About Me', '2': 'Projects', '3': 'Graphics', '4': 'Courses' };

function App() {
  const [runId, setRunId] = useState(0);
  const [section, setSection] = useState(null);
  const [reply, setReply] = useState('');
  const terminalOpen = Boolean(section || reply);
  const [surprise, setSurprise] = useState(0);
  const clearSurprise = useCallback(() => setSurprise(0), []);
  const [command, setCommand] = useState('');
  const [message, setMessage] = useState('');
  const input = useRef(null);
  const isError = message.startsWith('Unknown command');

  const run = (value = command) => {
    const choice = value.trim().toLowerCase();
    if (sections[choice]) {
      setReply('');
      setSection(choice);
      setRunId(id => id + 1);
      setMessage('');
      setCommand('');
    } else if (Object.hasOwn(replies, choice)) {
      setReply(replies[choice]);
      setRunId(id => id + 1);
      setSection(null);
      setMessage('');
      setCommand('');
    } else if (choice === '0') {
      setCommand('');
      setMessage('');
      setSurprise(value => value + 1);
    } else {
      setMessage('Unknown command. Enter 1, 2, 3, or 4, then run again.');
    }
    input.current?.focus();
  };

  return (
    <main className="App">
      <InteractiveBackground />
      {surprise > 0 && <Surprise key={surprise} onComplete={clearSurprise} />}
      <div className="portfolio-shell">
        <form className="command-form" onSubmit={event => { event.preventDefault(); run(); }}>
          <label htmlFor="command" className="prompt"><span>❯</span><span className="sr-only"> Command</span></label>
          <input ref={input} id="command" value={command} onChange={event => setCommand(event.target.value)} placeholder="Enter a number" autoFocus autoComplete="off" spellCheck="false" aria-describedby="command-feedback" aria-invalid={isError} />
          <button type="submit" className="run-button" title="Run command (Enter)"><span aria-hidden="true">▶</span> Run</button>
        </form>
        <div id="command-feedback" role="status" aria-live={isError ? "assertive" : "polite"} className={message ? `ide-status${isError ? " command-error" : ""}` : "command-feedback-empty"}>
          {isError && <strong className="error-code">ERR_COMMAND</strong>}
          {message}
        </div>
      <section className="ide" aria-label="Interactive portfolio">
        <header className="ide-titlebar">
          <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
        </header>
        <div className="editor">
          <div className="editor-content">
            <h1><span className="code-purple">const</span> <span className="code-blue">portfolio</span> = {'{'}</h1>
            <div className="code-indent"><p>name: <span className="code-yellow">'Carl Angelo G. Angcana'</span>,</p>
              <p>profession: <span className="code-yellow">'Assistant Professor'</span>,</p>
              <p>role: <span className="code-yellow">'Software Developer'</span>,</p></div>
            <div className="code-indent">
              <p><span className="code-blue">menu</span>: {'{'}</p>
              <div className="code-indent">
                {Object.entries(sections).map(([key, label]) => <p key={key}><span className="command-number">{key}</span>: <span className="code-yellow">'{label}'</span>,</p>)}
              </div>
              <p>{'}'},</p>
            </div>
            <p>{'};'}</p>
          </div>
        </div>
        <div className={`terminal-reveal${terminalOpen ? " is-open" : ""}`} aria-hidden={!terminalOpen} inert={!terminalOpen}>
        <section className="output-panel" aria-label={sections[section] || "Terminal"}>
          <div className="terminal-heading"><span aria-hidden="true">›_</span> terminal</div>
          <div className="output-content" aria-live="polite" aria-atomic="true">
            {terminalOpen && <TerminalTyping key={runId}>
            {reply && <p>{reply}</p>}
            {section === '1' && <AboutMe />}
            {section === '2' && <Projects />}
            {section === '3' && <Graphics />}
            {section === '4' && <Courses />}
            </TerminalTyping>}
          </div>
        </section>
        </div>
      </section>
      </div>
    </main>
  );
}

export default App;
