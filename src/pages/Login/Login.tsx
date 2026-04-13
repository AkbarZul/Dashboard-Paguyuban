import Footer from "@/components/Footer";
import { Home, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router";
import { DASHBOARD, REGISTRASI } from "@/constans/routePaths";
import TextField from "@/components/ReactHookFields/TextField";
import { useForm } from "react-hook-form";
import schema, { FormValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
    mode: 'onChange'
  });
  const navigate = useNavigate();
  const handleAuthSubmit = () => {
    navigate(DASHBOARD);
  };
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans relative overflow-hidden">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 z-10 overflow-hidden transform transition-all">
        <div className="p-8 text-center bg-white border-slate-100">
          <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Home className="w-8 h-8 text-brand-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">
            Paguyuban Kav BRI
          </h2>
          <p className="text-slate-500 mt-1 text-sm">
            Silakan masuk ke akun pengurus Anda.
          </p>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit(handleAuthSubmit)} className="space-y-5">
            <TextField
              control={control}
              type="text"
              name="email"
              label="Email Anda"
              Icon={<Mail className="h-5 w-5 text-slate-400" />}
              placeholder="email@contoh.com"
              layoutClassname="w-full"
            />

            <TextField
              control={control}
              type="password"
              name="password"
              label="Kata Sandi"
              Icon={<Lock className="h-5 w-5 text-slate-400" />}
              placeholder="••••••••"
              layoutClassname="w-full"
            />
            <div className="mb-1 text-end">
              <a
                href="#"
                className="text-xs font-medium text-brand-600 hover:text-brand-700"
              >
                Lupa sandi?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-600 hover:bg-brand-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors shadow-sm mt-6"
            >
              Masuk Dashboard
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-600">
              Pengurus baru?{" "}
              <button
                className="font-semibold text-brand-600 hover:text-brand-700"
                onClick={() => navigate(REGISTRASI)}
              >
                Daftar di sini
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 w-full text-center text-slate-500 text-sm">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
