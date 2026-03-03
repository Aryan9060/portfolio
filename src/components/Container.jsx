export function Container({ className = 'p-20', as: As = 'div', ...props }) {
  return <As className={`container ${className}`} {...props} />
}

