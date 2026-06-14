name: Bug Report
description: Report a bug or issue
title: "[BUG] "
labels: ["bug"]
body:
  - type: markdown
    attributes:
      value: "## Bug Description"
  - type: textarea
    id: description
    attributes:
      label: Description
      description: Clearly describe the bug
      placeholder: What went wrong?
    validations:
      required: true
  - type: textarea
    id: steps
    attributes:
      label: Steps to Reproduce
      description: Steps to reproduce the behavior
      placeholder: "1. Click...\n2. Scroll...\n3. See error"
    validations:
      required: true
  - type: textarea
    id: expected
    attributes:
      label: Expected Behavior
      description: What should happen
    validations:
      required: true
  - type: input
    id: browser
    attributes:
      label: Browser
      placeholder: "Chrome 120, Safari 17, etc."
    validations:
      required: true
  - type: textarea
    id: screenshots
    attributes:
      label: Screenshots/Video
      description: Add screenshots or video if applicable
  - type: checkboxes
    id: checklist
    attributes:
      label: Checklist
      options:
        - label: I've searched for similar issues
          required: true
        - label: This is not a duplicate
          required: true
