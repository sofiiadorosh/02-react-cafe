import css from './VoteOptions.module.css';
import { VOTE_TYPES, type VoteType } from '../../types/votes';

interface VoteOptionsProps {
  onVote: (vote: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
      {VOTE_TYPES.map((type) => (
        <button className={css.button} key={type} onClick={() => onVote(type)}>
          {type}
        </button>
      ))}
      {canReset && (
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default VoteOptions;
