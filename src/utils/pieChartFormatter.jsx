export const formatForPieChart = (dataObj) => {
    return Object.entries(dataObj).map(([key, value]) => ({
        name: key,  // Convert keys to string labels
        value: value
    }));
};