export const formatForPieChart = (dataObj, answerOptions) => {
    return Object.entries(dataObj).map(([key, value]) => {
        const option = answerOptions.find(option => option.id === parseInt(key));
        return {
            name: option ? option.text_ru : "Unknown",  // Fallback in case option is not found
            value: value,
        };
    });
};
