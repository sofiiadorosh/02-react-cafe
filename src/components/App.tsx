import css from './App.module.css';
import type { Votes, VoteType } from '../types/votes';
import CafeInfo from './CafeInfo/CafeInfo';
import VoteOptions from './VoteOptions/VoteOptions';
import { useState } from 'react';

function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType): void => {
    setVotes({
      ...votes,
      [type]: votes[type] + 1,
    });
  };

  const resetVotes = (): void => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true} />
    </div>
  );
}

export default App;
