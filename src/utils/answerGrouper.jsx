export const answerGrouper = (arr) => {
    return arr.reduce((acc, option) => {
        acc[option] = (acc[option] || 0) + 1;
        return acc;
    }, {});
};
