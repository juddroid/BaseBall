import { useContext } from 'react';
import { GameContext } from '@/Components/Game/Game';
import Score from './Score';
import TeamName from './TeamName';
import VS from './VS';
import { GameHeader as S } from '@/Components/Game/GameStyles';

const GameProgress = () => {
  const { gameData, teamName, totalScore } = useContext(GameContext);

  return gameData ? (
    <S.GameProgress.GameProgress>
      <TeamName teamName={gameData.away.teamName} selectedTeam={teamName} />
      <Score score={totalScore.away} />
      <VS />
      <Score score={totalScore.home} />
      <TeamName teamName={gameData.home.teamName} selectedTeam={teamName} />
    </S.GameProgress.GameProgress>
  ) : null;
};

export default GameProgress;
