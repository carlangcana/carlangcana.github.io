import { useCallback, useRef, useState } from 'react';
import './App.css';
import TerminalTyping from './Components/TerminalTyping';
import AboutMe from './About/AboutMe';
import Projects from './Projects/Projects';
import Courses from './Courses/Courses';
import Graphics from './Graphics/Graphics';
import Surprise from './Components/Surprise';
import InteractiveBackground from './Components/InteractiveBackground';

const replies = {
  hello: 'hi',
  hi: 'hello',
  carl: 'pogi',
};

const sections = {
  '1': 'About Me',
  '2': 'Projects',
  '3': 'Graphics',
  '4': 'Courses',
};

const availableCommands = [
  ...Object.entries(sections),
  ['0', 'A little surprise'],
  ['hello', 'Say hello'],
  ['hi', 'Say hi'],
  ['carl', 'Try it yourself.'],
  ['help', 'Show all available commands'],
];

function App() {
  const [runId, setRunId] = useState(0);
  const [section, setSection] = useState(null);
  const [reply, setReply] = useState('');
  const [showHelp, setShowHelp] = useState(false);
  const [surprise, setSurprise] = useState(0);
  const [command, setCommand] = useState('');
  const [message, setMessage] = useState('');

  const input = useRef(null);
  const clearSurprise = useCallback(() => setSurprise(0), []);

  const terminalOpen = Boolean(section || reply || showHelp);
  const isError = message.startsWith('Unknown command');

  const run = (value = command) => {
    const choice = value.trim().toLowerCase();

    if (!choice) {
      input.current?.focus();
      return;
    }

    if (Object.hasOwn(sections, choice)) {
      setReply('');
      setShowHelp(false);
      setSection(choice);
      setRunId(id => id + 1);
    } else if (Object.hasOwn(replies, choice)) {
      setReply(replies[choice]);
      setShowHelp(false);
      setSection(null);
      setRunId(id => id + 1);
    } else if (choice === 'help') {
      setReply('');
      setSection(null);
      setShowHelp(true);
      setRunId(id => id + 1);
    } else if (choice === '0') {
      setSurprise(count => count + 1);
    } else {
      setMessage('Unknown command. Type "help" to see available commands.');
      input.current?.focus();
      return;
    }

    setMessage('');
    setCommand('');
    input.current?.focus();
  };

  return (
    <main className="App">
      <InteractiveBackground />

      {surprise > 0 && (
        <Surprise key={surprise} onComplete={clearSurprise} />
      )}

      <div className="portfolio-shell">
        <form
          className="command-form"
          onSubmit={event => {
            event.preventDefault();
            run();
          }}
        >
          <label htmlFor="command" className="prompt">
            <span>❯</span>
            <span className="sr-only"> Command</span>
          </label>

          <input
            ref={input}
            id="command"
            value={command}
            onChange={event => setCommand(event.target.value)}
            placeholder='Enter a number'
            autoFocus
            autoComplete="off"
            spellCheck={false}
            aria-describedby="command-feedback"
            aria-invalid={isError}
          />

          <button
            type="submit"
            className="run-button"
            title="Run command (Enter)"
          >
            <span aria-hidden="true">▶</span> Run
          </button>
        </form>

        <div
          id="command-feedback"
          role="status"
          aria-live={isError ? 'assertive' : 'polite'}
          className={
            message
              ? `ide-status${isError ? ' command-error' : ''}`
              : 'command-feedback-empty'
          }
        >
          {isError && <strong className="error-code">ERR_COMMAND</strong>}
          {message}
        </div>

        <section className="ide" aria-label="Interactive portfolio">
          <header className="ide-titlebar">
            <div className="window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
          </header>

          <div className="editor">
            <div className="editor-content">
              <h1>
                <span className="code-purple">const</span>{' '}
                <span className="code-blue">portfolio</span> = {'{'}
              </h1>

              <div className="code-indent">
                <p>
                  name:{' '}
                  <span className="code-yellow">
                    'Carl Angelo G. Angcana'
                  </span>,
                </p>
                <p>
                  profession:{' '}
                  <span className="code-yellow">'Assistant Professor'</span>,
                </p>
                <p>
                  role:{' '}
                  <span className="code-yellow">'Software Developer'</span>,
                </p>
              </div>

              <div className="code-indent">
                <p>
                  <span className="code-blue">menu</span>: {'{'}
                </p>

                <div className="code-indent">
                  {Object.entries(sections).map(([key, label]) => (
                    <p key={key}>
                      <span className="command-number">{key}</span>:{' '}
                      <span className="code-yellow">'{label}'</span>,
                    </p>
                  ))}
                </div>

                <p>{'}'},</p>

                <p>
                  <span className="code-blue">help</span>:{' '}
                  <span className="code-yellow">
                    'Type help for all commands'
                  </span>,
                </p>
              </div>

              <p>{'};'}</p>
            </div>
          </div>

          <div
            className={`terminal-reveal${terminalOpen ? ' is-open' : ''}`}
            aria-hidden={!terminalOpen}
            inert={!terminalOpen}
          >
            <section
              className="output-panel"
              aria-label={showHelp ? 'Available commands' : sections[section] || 'Terminal'}
            >
              <div className="terminal-heading">
                <span aria-hidden="true">›_</span> terminal
              </div>

              <div
                className="output-content"
                aria-live="polite"
                aria-atomic="true"
              >
                {terminalOpen && (
                  <TerminalTyping key={runId}>
                    {reply && <p>{reply}</p>}

                    {showHelp && (
                      <>
                        <h3>Available commands</h3>

                        <dl
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'max-content minmax(0, 1fr)',
                            gap: '10px 24px',
                            margin: '16px 0',
                          }}
                        >
                          {availableCommands.map(([keyword, description]) => (
                            <div key={keyword} style={{ display: 'contents' }}>
                              <dt>
                                <code className="code-blue">{keyword}</code>
                              </dt>
                              <dd style={{ margin: 0 }}>{description}</dd>
                            </div>
                          ))}
                        </dl>

                        <p>Type a command above, then press Enter.</p>
                      </>
                    )}

                    {section === '1' && <AboutMe />}
                    {section === '2' && <Projects />}
                    {section === '3' && <Graphics />}
                    {section === '4' && <Courses />}
                  </TerminalTyping>
                )}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;