import {useEffect, useState} from "react";
import {useLanguage} from "../context/LanguageContext.jsx";
import {getCourts} from "../services/courtsService.jsx";
import NavBar from "../components/NavBar.jsx";

export default function Counties() {
    const [counties, setCounties] = useState([]);

    useEffect(() => {
        getCourts()
            .then((data) => setCounties(data))
            .catch((err) => alert(err));
    }, []); // Make sure to pass an empty array to run the effect only once
    const {language} = useLanguage();

    return (
        <>
            <NavBar />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-semibold mb-4">County Courts List</h1>
                {counties.length === 0 ? (
                    <p>No county courts available.</p>
                ) : (
                    <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
                        <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="px-4 py-2 font-semibold text-gray-700">Court Name</th>
                            <th className="px-4 py-2 font-semibold text-gray-700">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {counties.map((court) => (
                            <tr key={court.id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-2 text-gray-800">
                                    {language === "kg" ? court.name_kg : court.name_ru}
                                </td>
                                <td className="px-4 py-2">
                                    <button
                                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                        onClick={() =>
                                            alert(
                                                `Go to details for ${
                                                    language === "kg" ? court.name_kg : court.name_ru
                                                }`
                                            )
                                        } // Replace with actual navigation
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