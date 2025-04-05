export const answerGrouper = (arr) => {
    return arr.reduce((acc, num) => {
        if (num !== null) {  // Ignore null values
            acc[num] = (acc[num] || 0) + 1;
        }
        return acc;
    }, {});
};
