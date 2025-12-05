import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

function StarRating({ rating, onRatingChange, readonly = false, size = 'medium' }) {
  const sizeClasses = {
    small: 'h-4 w-4',
    medium: 'h-6 w-6',
    large: 'h-8 w-8'
  };

  const handleClick = (value) => {
    if (!readonly && onRatingChange) {
      onRatingChange(value);
    }
  };

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => handleClick(star)}
          disabled={readonly}
          className={`${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110 transition-transform'} focus:outline-none`}
        >
          {star <= rating ? (
            <StarIcon className={`${sizeClasses[size]} text-orange-500`} />
          ) : (
            <StarOutlineIcon className={`${sizeClasses[size]} text-gray-500`} />
          )}
        </button>
      ))}
    </div>
  );
}

export default StarRating;
