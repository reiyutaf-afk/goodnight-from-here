name: Feature Request
description: Suggest an idea for improvement
title: "[FEATURE] "
labels: ["enhancement"]
body:
  - type: markdown
    attributes:
      value: "## Feature Suggestion"
  - type: textarea
    id: description
    attributes:
      label: Description
      description: Describe the feature you'd like to see
      placeholder: What would make this experience better?
    validations:
      required: true
  - type: textarea
    id: use-case
    attributes:
      label: Use Case
      description: Why is this feature important?
    validations:
      required: true
  - type: textarea
    id: alternatives
    attributes:
      label: Alternative Solutions
      description: Other approaches you've considered
