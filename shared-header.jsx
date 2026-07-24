import React from 'react';
import { Header, Footer } from './components.jsx';

export default function Page() {
  React.useEffect(() => {
    document.title = 'shared-header';
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main>
        
      </main>
      <Footer />
    </React.Fragment>
  );
}
