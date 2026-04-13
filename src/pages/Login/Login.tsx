import Footer from "@/components/Footer";
import { Home, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router";
import { DASHBOARD, REGISTRASI } from "@/constans/routePaths";

const Login = () => {
  const navigate = useNavigate();
  const handleAuthSubmit = () => {
    navigate(DASHBOARD);
  };
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans relative overflow-hidden">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-200 z-10 overflow-hidden transform transition-all">
        <div className="p-8 text-center bg-white border-b border-slate-100">
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
          <form onSubmit={handleAuthSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email Anda
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                    required
                  placeholder="email@contoh.com"
                  className="pl-10 w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-slate-700">
                  Kata Sandi
                </label>

                <a
                  href="#"
                  className="text-xs font-medium text-brand-600 hover:text-brand-700"
                >
                  Lupa sandi?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="password"
                    required
                  placeholder="••••••••"
                  className="pl-10 w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                />
              </div>
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

      {/* Footer info for Auth Page */}
      <div className="absolute bottom-6 w-full text-center text-slate-500 text-sm">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
