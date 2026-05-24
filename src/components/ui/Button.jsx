import { motion } from 'framer-motion';

export default function Button({ variant = 'primary', size = 'md', children, className = '', href, onClick, icon: Icon, ...props }) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'bg-transparent text-slate-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-xl transition-all duration-300',
  };

  const classes = `${variant === 'ghost' ? variants.ghost : variants[variant]} ${sizes[size]} inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-xl transition-all duration-300 cursor-pointer ${className}`;

  const content = (
    <>
      {variant === 'primary' ? (
        <span className="relative z-10 flex items-center gap-2">
          {Icon && <Icon className="w-5 h-5" />}
          {children}
        </span>
      ) : (
        <>
          {Icon && <Icon className="w-5 h-5" />}
          {children}
        </>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
