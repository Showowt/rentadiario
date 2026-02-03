import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { createServerClient } from '@/lib/supabase/server';
import SignInForm from '@/components/forms/SignInForm';

export const metadata: Metadata = {
  title: 'Iniciar Sesión - RentaDiario',
  description: 'Accede a tu cuenta en RentaDiario',
};

export default async function SignInPage() {
  const supabase = createServerClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (session) {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">¡Bienvenido!</h1>
          <p className="text-slate-300">Inicia sesión en tu cuenta</p>
        </div>
        <SignInForm />
      </div>
    </div>
  );
}