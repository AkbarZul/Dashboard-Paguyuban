const Pagination = () => {
  return (
    <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm">
      <span className="text-slate-500">
        Menampilkan 1 hingga 6 dari 112 data
      </span>
      <div className="flex gap-1">
        <button className="px-3 py-1 border border-slate-200 rounded text-slate-400 cursor-not-allowed">
          Seb
        </button>
        <button className="px-3 py-1 bg-brand-600 text-white rounded">1</button>
        <button className="px-3 py-1 border border-slate-200 hover:bg-slate-50 rounded text-slate-600">
          2
        </button>
        <button className="px-3 py-1 border border-slate-200 hover:bg-slate-50 rounded text-slate-600">
          3
        </button>
        <span className="px-2 py-1 text-slate-400">...</span>
        <button className="px-3 py-1 border border-slate-200 hover:bg-slate-50 rounded text-slate-600">
          Sel
        </button>
      </div>
    </div>
  );
};

export default Pagination;
