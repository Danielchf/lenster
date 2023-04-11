import '@uiw/react-textarea-code-editor/dist.css';
import '@uiw/react-code-preview/esm/index.css';

import { ChevronRightIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const CodeEditor = dynamic(() => import('@uiw/react-textarea-code-editor').then((mod) => mod.default), {
  ssr: false
});
const CodePreview = dynamic(() => import('@uiw/react-code-preview').then((mod) => mod.default), {
  ssr: false,
  loading: () => <div className="min-h-[80px] animate-pulse rounded-t-md bg-[#282c34] p-4" />
});

const ThemeConfig = {
  logo: <span>Lenster UI design</span>,
  project: {
    link: 'https://github.com/lensterxyz/lenster'
  },
  components: {
    CodeEditor: ({
      code: initialCode,
      dependencies
    }: {
      code: string;
      dependencies: Record<string, JSX.Element>;
    }) => {
      const [code, setCode] = useState(initialCode);

      const codePreview = `import Button from '@uiw/react-button';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(_mount_).render(<div className="flex justify-around">${code}</div>);`;

      const [state, toggleState] = useState(false);
      return (
        <div className="rounded-md border border-gray-400">
          <CodePreview
            noCode={true}
            data-color-mode="dark"
            bgWhite
            code={codePreview}
            dependencies={dependencies}
          />
          <button
            className={clsx(
              'flex w-full items-center border-[0.5px] border-slate-800 bg-gray-800 py-1 text-sm font-semibold',
              state ? 'rounded-b-none' : 'rounded-b-md'
            )}
            onClick={() => {
              toggleState((value) => !value);
            }}
          >
            <ChevronRightIcon className={clsx('h-4 w-4', state && 'rotate-90')} /> Code Editor
          </button>
          {state && (
            <CodeEditor
              data-color-mode="dark"
              value={code}
              language="jsx"
              placeholder="Please enter JS code."
              onChange={(evn) => setCode(evn.target.value)}
            />
          )}
        </div>
      );
    }
  }
};

export default ThemeConfig;
