import { Square } from './Square.jsx'
import PropTypes from 'prop-types';

export function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return null

  let content;
  if (winner === false) {
    // Caso de empate
    content = <h2>Empate</h2>;
  } else {
    // Caso de un ganador
    content = (
      <>
        <h2>Ganó:</h2>
        <header className='win'>
          <Square>{winner}</Square>
        </header>
      </>
    );
  }

  return (
    <section className='winner'>
      <div className='text'>
        {content}
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}

WinnerModal.propTypes = {
  winner: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  resetGame: PropTypes.func.isRequired,
};
