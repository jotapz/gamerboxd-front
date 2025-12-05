import { useState } from 'react';
import StarRating from './StarRating';

function ReviewForm({ gameId, onReviewSubmitted }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (rating === 0) {
      setError('Por favor, selecione uma avaliação');
      return;
    }

    if (!comment.trim()) {
      setError('Por favor, escreva um comentário');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('http://localhost:3000/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          gameId: parseInt(gameId),
          rating: rating,
          comment: comment.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar review');
      }

      // Reset form
      setRating(0);
      setComment('');
      
      // Notify parent component
      if (onReviewSubmitted) {
        onReviewSubmitted();
      }
    } catch (err) {
      setError('Erro ao enviar review. Tente novamente.');
      console.error('Error submitting review:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#1c2329] border border-gray-700 rounded-lg p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4 text-white">Escrever Review</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Sua Avaliação
          </label>
          <StarRating rating={rating} onRatingChange={setRating} size="large" />
        </div>

        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-300 mb-2">
            Seu Comentário
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            className="w-full px-4 py-3 bg-[#14181c] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
            placeholder="Compartilhe sua experiência com este jogo..."
            disabled={isSubmitting}
          />
        </div>

        {error && (
          <div className="mb-4 text-red-500 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Enviando...' : 'Publicar Review'}
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;
