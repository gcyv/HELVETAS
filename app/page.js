import React from 'react';
import { Search, Plus, ArrowLeft, ArrowRight, X } from 'lucide-react';

const Page = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', backgroundColor: '#f9f1f8', height: '100vh' }}>
      <div style={{ width: '100%', maxWidth: '1200px', padding: '0.5rem', display: 'flex', alignItems: 'center', backgroundColor: '#f4e5f4', marginBottom: '2rem', borderRadius: '30px' }}>
        <ArrowLeft style={{ height: '24px', width: '24px', marginRight: '0.5rem' }} />
        <ArrowRight style={{ height: '24px', width: '24px', marginRight: '1rem' }} />
        <input
          type="text"
          placeholder=""
          style={{ flex: 1, border: 'none', outline: 'none', padding: '0.3rem', backgroundColor: 'transparent', fontSize: '16px' }}
        />
        <X style={{ height: '24px', width: '24px', marginLeft: '0.5rem', cursor: 'pointer' }} />
      </div>

      <header style={{ marginBottom: '2rem' }}>
        <img src="/path/to/helvetas-logo.png" alt="Helvetas Bhutan" style={{ height: '100px' }} />
      </header>

      <div style={{ width: '100%', maxWidth: '600px' }}>
        <div style={{ display: 'flex', alignItems: 'center', borderRadius: '30px', backgroundColor: '#f4e5f4', padding: '0.5rem 1rem' }}>
          <Search style={{ height: '24px', width: '24px', marginRight: '0.5rem' }} />
          <input
            type="text"
            placeholder="Search"
            style={{ flex: 1, border: 'none', outline: 'none', padding: '0.75rem', backgroundColor: 'transparent', fontSize: '16px' }}
          />
          <X style={{ height: '24px', width: '24px', marginLeft: '0.5rem', cursor: 'pointer' }} />
        </div>
      </div>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
        {[...Array(6)].map((_, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', height: '80px', width: '80px', backgroundColor: '#e6e7ed', cursor: 'pointer' }}>
            {index === 0 || index === 5 ? (
              <img src="/path/to/icon.png" alt="Icon" style={{ height: '50px', width: '50px' }} />
            ) : (
              <Plus style={{ height: '50px', width: '50px', color: '#aaa' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

// To run this React component using Node.js, ensure you have a bundler like Webpack or use a framework like Next.js.
// Node.js doesn't natively support ES module syntax in .js files without additional configuration.
// Alternatively, add "type": "module" in your package.json or change the file extension to .mjs.
