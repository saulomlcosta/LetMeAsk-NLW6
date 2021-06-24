<<<<<<< HEAD
import { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
>>>>>>> ff4d55c57078ecfb41bc463c36858ac20a311d63

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
<<<<<<< HEAD
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';


import '../styles/auth.scss';
import firebase from 'firebase';

export function NewRoom() {
  const { user } = useAuth();
  const history = useHistory();
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`)
  }
=======
//import { useAuth } from '../hooks/useAuth';


import '../styles/auth.scss';

export function NewRoom() {
  // const { user } = useAuth();
>>>>>>> ff4d55c57078ecfb41bc463c36858ac20a311d63

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>Criar uma nova sala</h2>
<<<<<<< HEAD
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
=======
          <form>
            <input
              type="text"
              placeholder="Nome da sala"
>>>>>>> ff4d55c57078ecfb41bc463c36858ac20a311d63
            />
            <Button type="submit">
              Criar sala
             </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}