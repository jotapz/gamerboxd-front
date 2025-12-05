import StarRating from './StarRating';

function GameRating({ gameId, stats }) {
  if (!stats) return null;

  const { totalReviews, averageRating, distribution } = stats;

  return (
    <div className="bg-[#1c2329] border border-gray-700 rounded-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-5xl font-bold text-orange-500">
              {averageRating ? averageRating.toFixed(1) : '0.0'}
            </span>
            <div>
              <StarRating rating={Math.round(averageRating || 0)} readonly size="large" />
              <p className="text-sm text-gray-400 mt-1">
                {totalReviews} {totalReviews === 1 ? 'avaliação' : 'avaliações'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {distribution && Object.keys(distribution).length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">Distribuição</h4>
          {[5, 4, 3, 2, 1].map((star) => {
            const count = distribution[star] || 0;
            const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
            
            return (
              <div key={star} className="flex items-center space-x-3">
                <span className="text-sm text-gray-400 w-12 flex items-center">
                  {star} <span className="text-orange-500 ml-1">★</span>
                </span>
                <div className="flex-1 bg-[#14181c] rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-orange-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-400 w-12 text-right">
                  {count}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default GameRating;
