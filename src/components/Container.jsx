export function Container({ className = 'p-2 sm:p-10 lg', as: As = 'div', ...props }) {
  return <As className={`container ${className}`} {...props} />
}
