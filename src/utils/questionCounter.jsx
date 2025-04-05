export const countQuestionIds = (responses) => {
    const groupedResponses = responses.reduce((acc, response) => {
        // Check if the questionId already exists in the accumulator
        if (!acc[response.question]) {
            acc[response.question] = [];
        }
        // Push the selected_option for each questionId
        acc[response.question].push(response.selected_option);
        return acc;
    }, {});
    console.log(groupedResponses);
    // Return the grouped responses
    return groupedResponses;
};
