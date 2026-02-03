'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { signIn } from '@/app/actions/auth';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Alert } from '@/components/ui/Alert';
import Link from 'next/link';

const signInSchema = z.object({
  email: z.string().email('Ingresa un email válido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignInForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInFormData) => {
    setError(null);
    startTransition(async () => {
      try {
        const result = await signIn(data);
        if (result.error) {
          setError(result.error);
        } else {
          router.push('/');
          router.refresh();
        }
      } catch (err) {
        setError('Error inesperado. Intenta nuevamente.');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && (
        <Alert variant="destructive">
          {error}
        </Alert>
      )}

      <div>
        <Input
          {...register('email')}
          type="email"
          placeholder="Correo electrónico"
          className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
          disabled={isPending}
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Input
          {...register('password')}
          type="password"
          placeholder="Contraseña"
          className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
          disabled={isPending}
        />
        {errors.password && (
          <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold"
      >
        {isPending ? 'Iniciando sesión...' : 'Iniciar Sesión'}
      </Button>

      <div className="text-center space-y-2">
        <Link
          href="/recuperar-password"
          className="text-yellow-500 hover:text-yellow-400 text-sm"
        >
          ¿Olvidaste tu contraseña?
        </Link>
        <div className="text-slate-400 text-sm">
          ¿No tienes cuenta?{' '}
          <Link href="/registrarse" className="text-yellow-500 hover:text-yellow-400">
            Regístrate aquí
          </Link>
        </div>
      </div>
    </form>
  );
}