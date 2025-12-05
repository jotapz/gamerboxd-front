import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GameRating from '../components/GameRating';
import ReviewForm from '../components/ReviewForm';
import ReviewList from '../components/ReviewList';

function GameDetailPage() {
  const { gameId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchReviews = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:3000/reviews/game/${gameId}`);
      
      if (!response.ok) {
        throw new Error('Erro ao carregar reviews');
      }

      const data = await response.json();
      setReviews(data.reviews || []);
    } catch (err) {
      console.error('Error fetching reviews:', err);
      setError('Erro ao carregar reviews');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch(`http://localhost:3000/reviews/game/${gameId}/stats`);
      
      if (!response.ok) {
        throw new Error('Erro ao carregar estatísticas');
      }

      const data = await response.json();
      setStats(data);
    } catch (err) {
      console.error('Error fetching stats:', err);
    }
  };

  useEffect(() => {
    if (gameId) {
      fetchReviews();
      fetchStats();
    }
  }, [gameId]);

  const handleReviewSubmitted = () => {
    fetchReviews();
    fetchStats();
  };

  return (
    <div className="min-h-screen bg-[#14181c] py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header do Jogo */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Jogo #{gameId}
          </h1>
          <p className="text-gray-400">
            Avalie e compartilhe sua opinião sobre este jogo
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Estatísticas e Rating */}
        <GameRating gameId={gameId} stats={stats} />

        {/* Formulário de Review */}
        <ReviewForm gameId={gameId} onReviewSubmitted={handleReviewSubmitted} />

        {/* Lista de Reviews */}
        <ReviewList reviews={reviews} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default GameDetailPage;
