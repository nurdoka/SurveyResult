export const countQuestionIds = (responses) => {
    const groupedResponses = [];

    for (let i = 0; i < responses.length; i++) {
        const questionId = responses[i].question;
        const selectedOption = responses[i].selected_option;

        const existingGroup = groupedResponses.find(item => item.question === questionId);

        if (!existingGroup) {
            groupedResponses.push({ question: questionId, answers: [selectedOption] });
        } else if(selectedOption){
            existingGroup.answers.push(selectedOption);
        }
    }

    console.log("groupedResponses", groupedResponses);
    return groupedResponses;
};
