export default function Card({ title, description, children }) {
    return (
        <div className="w-full sm:w-1/2 lg:w-1/3 rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200">
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                {description && <p className="text-gray-600 mt-2">{description}</p>}
                <div className="mt-4">
                    {/* Render the chart or any other content passed as children */}
                    {children}
                </div>
            </div>
        </div>
    );
}