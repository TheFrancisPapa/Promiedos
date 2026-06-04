import { Star } from 'lucide-react';

export default function StarRating({ rating, color = '#f10000', label }) {
  // rating is from 0 to 5
  const validRating = Math.max(0, Math.min(5, rating));
  const fullStars = Math.floor(validRating);
  const decimal = validRating - fullStars;
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</span>
      <div style={{ display: 'flex', gap: '0.2rem', alignItems: 'center' }}>
        {[...Array(5)].map((_, i) => {
          let fillWidth = '0%';
          if (i < fullStars) fillWidth = '100%';
          else if (i === fullStars) fillWidth = `${decimal * 100}%`;
          
          return (
            <div key={i} style={{ position: 'relative', width: '20px', height: '20px' }}>
              {/* Empty Star Background */}
              <Star size={20} color="rgba(255,255,255,0.1)" strokeWidth={1} />
              {/* Filled Star Foreground */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: fillWidth, height: '100%', overflow: 'hidden' }}>
                <Star size={20} color={color} fill={color} strokeWidth={1} />
              </div>
            </div>
          );
        })}
        <span style={{ marginLeft: '0.5rem', fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--text-primary)' }}>{validRating.toFixed(2)}</span>
      </div>
    </div>
  );
}
