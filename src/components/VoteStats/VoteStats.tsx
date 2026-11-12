import css from './VoteStats.module.css';
import { VOTE_TYPES, type Votes } from '../../types/votes';

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

function VoteStats({ votes, totalVotes, positiveRate }: VoteStatsProps) {
  return (
    <div className={css.container}>
      {VOTE_TYPES.map((type) => (
        <p className={css.stat} key={type}>
          {type}: <strong>{votes[type]}</strong>
        </p>
      ))}
      <p className={css.stat}>
        Total: <strong>{totalVotes}</strong>
      </p>
      <p className={css.stat}>
        Positive: <strong>{positiveRate}%</strong>
      </p>
    </div>
  );
}

export default VoteStats;
