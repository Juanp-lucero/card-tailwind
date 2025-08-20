// app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#c9d3df] text-slate-700 dark:bg-[#c9d3df] dark:text-slate-700">
      <div className="bg-white dark:bg-white p-6 rounded-xl shadow-xl w-[360px]">
        <div className="flex justify-between mb-3">
          <span className="text-sm text-slate-500">Tue Feb 18 2025</span>
          <span className="text-sm text-slate-500">9:31:25 p.m.</span>
        </div>

        <h1 className="font-semibold text-lg mb-3 text-blue-600">
          List Tailwind
        </h1>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1 text-center mb-4 text-sm text-slate-500">
          <span>s</span>
          <span>m</span>
          <span>t</span>
          <span>w</span>
          <span>t</span>
          <span>f</span>
          <span>s</span>

          <span className="col-span-7 h-0.5 w-full bg-slate-200 mt-1 mb-1"></span>

          <span>24</span><span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span>
        </div>

        {/* List */}
        <div className="space-y-3">
          <div className="flex justify-between items-center bg-[#e1ebff] rounded-md px-3 py-2">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-green-500 rounded-full grid place-items-center">✓</div>
              <span className="text-sm line-through">take out the trash</span>
            </div>
            <span className="text-xs text-slate-600">9:00 AM</span>
          </div>

          <div className="flex justify-between items-center bg-[#e1ebff] rounded-md px-3 py-2">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 bg-green-500 rounded-full grid place-items-center">✓</div>
              <span className="text-sm line-through">do homework</span>
            </div>
            <span className="text-xs text-slate-600">12:00 PM</span>
          </div>

          <div className="flex justify-between items-center bg-[#e1ebff] rounded-md px-3 py-2">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 border border-slate-400 rounded-full"></div>
              <span className="text-sm">go to grocery store</span>
            </div>
            <span className="text-xs text-slate-600">1:00 PM</span>
          </div>

          <div className="flex justify-between items-center bg-[#e1ebff] rounded-md px-3 py-2">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 border border-slate-400 rounded-full"></div>
              <span className="text-sm">run 5 kilometers</span>
            </div>
            <span className="text-xs text-slate-600">4:20 PM</span>
          </div>

          <div className="flex justify-between items-center bg-[#e1ebff] rounded-md px-3 py-2">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 border border-slate-400 rounded-full"></div>
              <span className="text-sm">load the dishwasher</span>
            </div>
            <span className="text-xs text-slate-600">9:00 PM</span>
          </div>

          <div className="flex justify-between items-center bg-[#e1ebff] rounded-md px-3 py-2">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 border border-slate-400 rounded-full"></div>
              <span className="text-sm">Take out the trash</span>
            </div>
            <span className="text-xs text-slate-600">9:00 AM</span>
          </div>
        </div>
      </div>
    </main>
  );
}
