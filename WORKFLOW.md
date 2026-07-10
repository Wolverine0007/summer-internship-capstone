# AI Workflow Comparison

This project compares two implementations of the same settings-form feature: one produced from a vague prompt and another from a precise, verification-focused prompt. The goal was to make the difference between casual AI output and directed AI work visible in a small, testable feature.

The vague-prompt branch produced a working form quickly, but it left a few quality gaps. The validation logic accepted empty notification values, the form had no explicit accessibility hint, and the success/error feedback was minimal. In contrast, the precise-prompt branch used a clearer specification with file references, constraints, and an explicit verification step. That version improved field behavior, added a better empty-state choice, and made the UI more accessible with descriptive text and stronger feedback.

The most important AI mistake I caught was in the first branch’s validation behavior. The feature looked complete at first glance, but it did not correctly reject an empty notification choice. That kind of hidden edge case is easy for AI to miss when the prompt is vague and no test is requested. The second branch avoided that issue because the prompt explicitly asked for edge cases and verification.

From a review perspective, the precise branch required less cleanup. The code was easier to reason about, the tests were more meaningful, and the UI states were clearer. The vague branch was faster to produce but required more manual review and a second round of corrections. That difference is exactly what this exercise is meant to surface: correctness, accessibility, edge cases, and review effort all improve when the prompt is specific and the workflow includes verification.
