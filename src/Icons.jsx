export function KeyIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <circle cx="9" cy="16" r="5" />
      <path d="M14 16h15M24 16v5M28 16v4" />
    </svg>
  )
}

export function Figure({ img, className = '', as: Tag = 'figure' }) {
  return (
    <Tag className={'fig ' + className}>
      {img.path ? (
        <img src={img.path} alt={img.alt} loading="lazy" />
      ) : (
        <span className="ph" role="img" aria-label={img.alt}>
          <KeyIcon size={30} />
          <span className="ph-t">Your image here</span>
          <span>{img.idea}</span>
        </span>
      )}
    </Tag>
  )
}
