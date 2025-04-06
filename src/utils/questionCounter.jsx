export const countQuestionIds = (responses) => {
    let groupedResponses = [];
    for (let i = 0; i < responses.length; i++) {
        const {
            question: questionId,
            selected_option: selectedOption,
            custom_answer: customAnswer,
            multiple_selected_options: multipleSelected
        } = responses[i];
        let existingGroup = groupedResponses.find(item => item.question === questionId);

        if (!existingGroup) {
            groupedResponses.push({
                question: questionId,
                selectedOptions: [
                    ...(selectedOption !== null ? [selectedOption] : []),
                    ...(Array.isArray(multipleSelected) ? multipleSelected : [])
                ],
                customAnswers: customAnswer ? [customAnswer] : []
            });
        } else {
            if (selectedOption !== null) existingGroup.selectedOptions.push(selectedOption);
            if (Array.isArray(multipleSelected)) existingGroup.selectedOptions.push(...multipleSelected);
            if (customAnswer) existingGroup.customAnswers.push(customAnswer);
        }
    }

    return groupedResponses;
};
