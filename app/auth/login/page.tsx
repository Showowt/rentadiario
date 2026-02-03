import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#17A2B8]/20 via-[#4A90E2]/10 to-transparent p-12 flex-col justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#17A2B8] rounded-xl flex items-center justify-center text-white font-bold text-xl">RD</div>
          <span className="text-xl font-bold">Renta Diario</span>
        </Link>
        <div>
          <h1 className="text-4xl font-bold mb-4">A place for everyone!</h1>
          <p className="text-white/60 text-lg">Join thousands of hosts and travelers who trust Renta Diario across Colombia</p>
        </div>
        <div className="flex items-center gap-8 text-white/40 text-sm">
          <div><span className="text-2xl font-bold text-white">2,500+</span><br/>Properties</div>
          <div><span className="text-2xl font-bold text-white">50K+</span><br/>Bookings</div>
          <div><span className="text-2xl font-bold text-white">4.9</span><br/>Rating</div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Demo Banner */}
          <div className="mb-8 p-4 bg-[#17A2B8]/10 border border-[#17A2B8]/30 rounded-xl">
            <div className="flex items-center gap-2 text-[#17A2B8] font-medium mb-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Demo Mode
            </div>
            <p className="text-sm text-white/60">Use the pre-filled credentials to explore the full host dashboard</p>
          </div>

          <h2 className="text-2xl font-bold mb-2">Welcome back</h2>
          <p className="text-white/50 mb-8">Sign in to your account to continue</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Email address</label>
              <input type="email" defaultValue="maria@rentadiario.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#17A2B8]/50 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/70 mb-2">Password</label>
              <input type="password" defaultValue="demo1234" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-[#17A2B8]/50 focus:outline-none" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-white/20 bg-white/5 text-[#17A2B8] focus:ring-[#17A2B8]/50" />
                <span className="text-white/60">Remember me</span>
              </label>
              <a href="#" className="text-[#17A2B8] hover:text-[#138496]">Forgot password?</a>
            </div>
            <Link href="/dashboard" className="block w-full py-3 bg-[#17A2B8] text-white font-semibold rounded-xl text-center hover:bg-[#138496] transition">
              Access Demo Dashboard
            </Link>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
              <div className="relative flex justify-center text-sm"><span className="px-4 bg-[#0a0a0a] text-white/40">or continue with</span></div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition">
                <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </button>
            </div>
          </div>

          <div className="mt-8 text-center text-white/40 text-sm">
            Don&apos;t have an account? <Link href="/auth/signup" className="text-[#17A2B8] hover:text-[#138496]">Sign up free</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
