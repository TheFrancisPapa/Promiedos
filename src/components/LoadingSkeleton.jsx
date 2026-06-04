export default function LoadingSkeleton({ variant = 'cards' }) {
  if (variant === 'detail') {
    return (
      <div className="page-enter" style={{ padding: '2rem 0' }}>
        <div className="skeleton" style={{ width: '160px', height: '16px', marginBottom: '2rem' }} />
        <div className="glass" style={{ padding: '3rem' }}>
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 500px' }}>
              <div className="skeleton" style={{ width: '120px', height: '14px', marginBottom: '1.5rem' }} />
              <div className="skeleton" style={{ width: '80%', height: '48px', marginBottom: '1rem' }} />
              <div className="skeleton" style={{ width: '60%', height: '36px', marginBottom: '2rem' }} />
              {[...Array(4)].map((_, i) => (
                <div key={i} className="skeleton" style={{ width: `${90 - i * 10}%`, height: '16px', marginBottom: '0.75rem' }} />
              ))}
            </div>
            <div style={{ width: '300px', flex: '0 0 300px' }}>
              <div className="skeleton" style={{ width: '100%', height: '400px', borderRadius: '16px' }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'table') {
    return (
      <div className="page-enter">
        <div className="skeleton" style={{ width: '280px', height: '36px', marginBottom: '2rem' }} />
        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className="glass" style={{ flex: '1 1 340px', padding: '0' }}>
              <div className="skeleton" style={{ width: '100%', height: '48px', borderRadius: '12px 12px 0 0' }} />
              {[...Array(6)].map((_, j) => (
                <div key={j} style={{ display: 'flex', gap: '1rem', padding: '0.85rem 1rem', borderBottom: '1px solid var(--border-color)' }}>
                  <div className="skeleton" style={{ width: '30px', height: '16px' }} />
                  <div className="skeleton" style={{ flex: 1, height: '16px' }} />
                  <div className="skeleton" style={{ width: '50px', height: '16px' }} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default: cards
  return (
    <div className="page-enter">
      <div className="skeleton" style={{ width: '250px', height: '36px', marginBottom: '2rem' }} />
      <div className="card-grid card-grid-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div className="skeleton" style={{ width: '120px', height: '120px', borderRadius: '50%' }} />
              <div className="skeleton" style={{ width: '180px', height: '24px' }} />
              <div className="skeleton" style={{ width: '140px', height: '16px' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
              <div className="skeleton" style={{ width: '60px', height: '40px' }} />
              <div className="skeleton" style={{ width: '60px', height: '40px' }} />
              <div className="skeleton" style={{ width: '60px', height: '40px' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
