export default function Card({ children, title, description }) {
    return (
        <div className="w-full sm:w-1/2 lg:w-1/3 rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200">
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                {description && <p className="text-gray-600 mt-2">{description}</p>}
                <div className="mt-4">{children}</div>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    See Details
                </button>
            </div>
        </div>
    );
}
