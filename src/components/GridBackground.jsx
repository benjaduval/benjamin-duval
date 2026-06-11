export default function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, #6C63FF 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.02]"
        style={{
          background: 'radial-gradient(circle, #00D9FF 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
