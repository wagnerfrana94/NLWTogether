import illustration from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';
import icoGoogle from '../assets/google-icon.svg';

import '../styles/auth.scss';

export function Home(){
    return (
       <div id="page-auth">
           <aside>
               <img src={illustration} alt="Ilustra��o"/>
               <strong>Crie salas de Q&amp;A ao-vivo</strong>
               <p>Tire as d�vidas da sua audi�ncia em tempo real.</p>
           </aside>
           <main>
               <div className="main-content">
                   <img src={logoImg} alt="Letmeask"/>
                   <button>
                       <img src={icoGoogle} alt="Logo do Google"/>
                       Crie sua sala com o Google
                   </button>
                   <div>ou entre em uma sala</div>
                   <form>
                       <input
                           type="text"
                           placeholder="Digite o c�digo da sala"
                       />
                       <button type="submit">
                           Entrar na sala
                       </button>
                   </form>
               </div>
           </main>
       </div>
    );
}