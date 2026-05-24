export default function Badge({ children, variant = 'blue', className = '' }) {
  const variants = {
    blue: 'bg-blue-500/15 text-blue-400 border-blue-500/20',
    cyan: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20',
    purple: 'bg-purple-500/15 text-purple-400 border-purple-500/20',
    green: 'bg-green-500/15 text-green-400 border-green-500/20',
    amber: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
    red: 'bg-red-500/15 text-red-400 border-red-500/20',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full border ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
