interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'error'
  children: React.ReactNode
}

export function Alert({ type = 'info', children }: AlertProps) {
  const styles = {
    info: 'bg-blue-900/50 border-blue-500 text-blue-200',
    success: 'bg-green-900/50 border-green-500 text-green-200',
    warning: 'bg-amber-900/50 border-amber-500 text-amber-200',
    error: 'bg-red-900/50 border-red-500 text-red-200'
  }
  return (
    <div className={`border rounded-lg px-4 py-3 ${styles[type]}`}>
      {children}
    </div>
  )
}
