// Reusable white card wrapper used by all charts and tables
export default function Card({ title, action, children }) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
      {(title || action) && (
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm font-semibold text-gray-700">{title}</div>
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

// Small outline button — reused in chart headers
export function OutlineBtn({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-xs text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50"
    >
      {children}
    </button>
  );
}
