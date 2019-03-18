import React from 'react';
import pic from './images/ilana.jpg';

function App() {
  return (
    <main className='App'>
    <section role="region">
      <header>
        <h3>Contact Info</h3>
      </header>
      <address>
        Sally Student<br />
        <a href="mailto:sally.student@gmail.com">sally.student@gmail.com</a><br />
        415-123-1254<br /><br />
      </address>
        <img src={pic} alt="Sally Student" />
    </section>
      <section role="region">
        <header>
          <h3>Education</h3>
        </header>
        <h4>University of California, Los Angeles, CA, 2006 - 2012</h4>
        <ul>
          <li>Bachelor of Arts, Linguistics (2010)</li>
          <li>Masters, Linguistics (2012)</li>
        </ul>
      </section>
      <section role="region"> 
        <header>
            <h3>Employment</h3>
        </header>
        <h4>SMB Environmental, Roseville, CA, 2012 - 2014</h4>
        <ul>
          <li>Cultural Resources Specialist</li>
          <li>Job description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
        </ul>
        <h4>Appen, San Francisco, CA, 2014 - 2018</h4>
        <ul>
          <li>Computational Linguist</li>
          <li>Job description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
        </ul>
      </section>
    </main>
  );
}

export default App;