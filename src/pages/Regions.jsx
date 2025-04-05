import {useEffect, useState} from "react";
import {getRegions} from "../services/regionService.jsx";
import NavBar from "../components/NavBar.jsx";
import {useLanguage} from "../context/LanguageContext.jsx";

export default function Regions() {
    const [regions, setRegions] = useState([]);

    useEffect(() => {
        getRegions()
            .then((data) => setRegions(data))
            .catch((err) => alert(err));
    }, []); // Make sure to pass an empty array to run the effect only once
    const {language} = useLanguage();
    return (
        <>
            <NavBar/>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-semibold mb-4">Regions List</h1>
                {regions.length === 0 ? (
                    <p>No regions available.</p>
                ) : (
                    <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
                        <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="px-4 py-2 font-semibold text-gray-700">Region Name</th>
                            <th className="px-4 py-2 font-semibold text-gray-700">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {regions.map((region) => (
                            <tr key={region.id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-2 text-gray-800">{language === 'kg' ? region.name_kg : region.name_ru}</td>
                                {/* Display name_ru instead of name */}
                                <td className="px-4 py-2">
                                    <button
                                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                        onClick={() => alert(`Go to details for ${language==='kg' ? region.name_kg : region.name_ru}`)} // Replace with actual navigation
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}
