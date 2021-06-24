<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';

=======
import { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
>>>>>>> ff4d55c57078ecfb41bc463c36858ac20a311d63

import { AuthContextProvider } from './contexts/AuthContext';




function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
<<<<<<< HEAD
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
=======
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
>>>>>>> ff4d55c57078ecfb41bc463c36858ac20a311d63
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
