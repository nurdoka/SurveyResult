export default function Card({ title, description, children }) {
    return (
        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 h-full">
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                    {description && <p className="text-gray-600 mt-2">{description}</p>}
                    <div className="mt-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
