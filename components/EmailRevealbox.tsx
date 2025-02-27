'use client';
import { useState } from 'react';

const EmailRevealBox = ({ email }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  
  const handleReveal = () => {
    setIsRevealed(true);
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    
    // Reset the "Copied" state after 2 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  
  return (
    <div className="mt-6 rounded-xl bg-white p-6 shadow-md dark:bg-gray-800/50">
      <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Connect</h4>
      <div className="text-gray-600 dark:text-gray-300">
        {!isRevealed ? (
          <button 
            onClick={handleReveal}
            className="flex items-center text-left font-medium transition hover:text-blue-600 dark:hover:text-blue-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Me
          </button>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">My Email:</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 dark:border-gray-700 dark:bg-gray-800">
              <span className="break-all font-mono text-gray-800 dark:text-gray-200">{email}</span>
              <button
                onClick={handleCopy}
                className={`ml-auto rounded-md ${
                  isCopied 
                    ? 'bg-green-500 text-white' 
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                } px-2 py-1 text-xs font-medium transition-colors duration-200`}
                aria-label="Copy email to clipboard"
              >
                {isCopied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            
            <div className="flex justify-between">
              <button
                onClick={() => setIsRevealed(false)}
                className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              >
                Hide
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Usage in your AuthorLayout component:
// Replace the existing Connect box with:
// <EmailRevealBox email={email} />

export default EmailRevealBox;