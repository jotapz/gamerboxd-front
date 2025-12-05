import StarRating from './StarRating';

function ReviewList({ reviews, isLoading }) {
  if (isLoading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
        <p className="text-gray-400 mt-2">Carregando reviews...</p>
      </div>
    );
  }

  if (!reviews || reviews.length === 0) {
    return (
      <div className="bg-[#1c2329] border border-gray-700 rounded-lg p-8 text-center">
        <p className="text-gray-400">Nenhuma review ainda. Seja o primeiro a avaliar!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white mb-4">
        Reviews ({reviews.length})
      </h3>
      
      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-[#1c2329] border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors duration-200"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                {review.username ? review.username.charAt(0).toUpperCase() : 'U'}
              </div>
              <div>
                <p className="font-semibold text-white">
                  {review.username || 'Usuário Anônimo'}
                </p>
                <p className="text-sm text-gray-400">
                  {new Date(review.createdAt).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
            
            <StarRating rating={Math.round(review.rating)} readonly size="small" />
          </div>

          <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
            {review.comment}
          </p>

          {/* Letterboxd-style bottom bar with likes (opcional para futuro) */}
          <div className="mt-4 pt-4 border-t border-gray-700 flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <button className="hover:text-orange-500 transition-colors">
                ♥ Curtir
              </button>
              <span>·</span>
              <span>{review.rating.toFixed(1)} estrelas</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
