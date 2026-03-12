# Micromanaged Driven Development (MMDD) - version 4

This development methodology uses systematic documentation to control AI-assisted software development through granular task breakdown and chronological tracking.

## Structure

A **unit** represents a major phase or component in the development process. Each unit may contain one or more **subunits**, which capture discrete build moments such as design decisions, iterations, or integrations.

Each unit/subunit produces up to three document types within `dev_log/`, following the naming convention:

```
<sequence>_<unitname>.md                    # plan (default)
<sequence>_<unitname>_test.md               # test instructions
<sequence>_<unitname>_done.md               # completion context
<sequence>_<unitname>_sub<number|name>.md  # subunit plan
<sequence>_<unitname>_sub<number|name>_test.md  # subunit test
<sequence>_<unitname>_sub<number|name>_done.md  # subunit done
```

**Rules:**
- Unit names are **one word**, lowercase
- Plan files omit the type suffix for backwards compatibility with v3
- Test and done files use explicit `_test` and `_done` suffixes
- Files are created only when they have content — no empty placeholders
- Numeric prefixes allow flexible sequencing

## Document Types

**Plan** (default `.md`): The unit's objective, approach, and implementation strategy. Created first during planning phase.

**Test** (`_test.md`): Instructions for validating the unit's implementation. Can be created alongside or after the plan.

**Done** (`_done.md`): All relevant context captured at unit completion — what was actually implemented, deviations from plan, integration notes.

## File Organization

```
project/
├── README.md            # Main project description
├── dev_log/             # Chronological development units
│   ├── 00_mmdd.md       # MMDD Description and version
│   ├── 00_main.md       # Main project status and unit index
│   ├── 01_setup.md      # First unit plan
│   ├── 01_setup_test.md # First unit test instructions
│   ├── 01_setup_done.md # First unit completion context
│   └── 02_auth.md       # Second unit plan
└── src/                 # Source code
```

## [00_main.md](00_main.md) Template

```markdown
# Project Plan and Dev Log

Brief project description and development approach.

## Structure
[Explain unit/subunit organization and naming convention]

## About the Project
### What This Is
[Project purpose and scope]

### Architecture
[High-level system design]

### Technical Stack
[Technologies and tools]

## Project Status
### Overall Completion
[Percentage or status]

### Completed Features
[Implementation summary with metrics]

## Units Implemented
### Completed Units
* **01**: Unit Name - Brief description

### Units In Progress
#### 02. Current Unit Name
**Status:** [What's done, what's pending]

## Planned Units
* **03**: Future Unit - Description
```

## Unit Plan Template

```markdown
# Unit [N]: [Unit Name]

## Objective
[What this unit accomplishes]

## Implementation
[Technical approach and key decisions]

## AI Interactions
[How AI was used, effective prompts, iterations]

## Files Modified
[Source files created or changed]

## Status: [Complete/In Progress]
[Completion notes and metrics]
```

## Unit Test Template

```markdown
# Unit [N]: [Unit Name] - Test Instructions

## Test Objectives
[What needs to be validated]

## Manual Tests
[Step-by-step validation procedures]

## Automated Tests
[Test commands and expected outputs]

## Integration Checks
[How this unit integrates with existing work]

## Success Criteria
[Specific conditions that indicate completion]
```

## Unit Done Template

```markdown
# Unit [N]: [Unit Name] - Completion Context

## What Was Implemented
[Actual implementation vs. original plan]

## Key Decisions
[Important choices made during implementation]

## Deviations from Plan
[What changed and why]

## Files Modified
[Complete list of source files created/changed]

## Integration Notes
[How this unit connects to the broader system]

## Lessons Learned
[Insights for future units]
```

## Subunit Templates

Follow the same pattern as unit templates, but with subunit-specific scope:

```markdown
# Unit [N]: [Unit Name] - Subunit: [Subunit Name]

## Objective
[Specific subunit goal within the larger unit]

## Implementation
[Technical details and approach]

## AI Interactions
[Specific AI usage for this subunit]

## Status: [Complete/In Progress]
[Integration notes and next steps]
```

## Workflow

MMDD follows a 5-step cycle that applies both to initial project setup and to each individual unit. This systematic approach ensures clarity and mutual understanding between the developer and AI assistant.

### The 5-Step Cycle

#### 1. Create Context
Establish shared understanding before any planning or implementation.

**For the project:** Discuss the problem domain, overall goals, technical constraints, and available tools.

**For each unit:** Verify the AI understands the specific objective, how it fits into the larger project, relevant technical details, and any dependencies on previous units.

**Key question:** "Do we both understand what we're trying to accomplish and why?"

#### 2. Plan and Define
With context established, formalize the approach in markdown.

**For the project:** The AI drafts `00_main.md` with project description, architecture, technical stack, and initial unit breakdown (3-5 units recommended).

**For each unit:** The AI creates the unit plan file (e.g., `02_auth.md`) with clear objectives, implementation approach, and success criteria.

**Developer action:** Review the plan and approve before proceeding, or iterate until the plan is solid.

#### 3. Implementation
Execute the plan in small, manageable chunks.

**For code units:** Create test instructions (`_test.md`) either alongside the plan or during implementation. Break into subunits as needed for complex implementations.

**For non-code units:** Break down into logical subunits as needed (design, integration, configuration, etc.)

**Best practice:** Implement incrementally, validating each piece before moving forward.

#### 4. Test and Validate
Verify the implementation meets the unit's objectives using the test instructions.

**AI's role:** 
- Help execute tests (manual or automated)
- Provide a concise summary of what was implemented
- List the main validation points to check

**Developer action:** Confirm the unit achieves its stated objectives and integrates properly with existing work.

#### 5. Commit
Finalize the unit with completion context and structured git commit.

**Create done file:** Document what was actually implemented in `_done.md`, including any deviations from the original plan.

**Commit message format:**

Title line (first line):
- For project setup: `Complete Project Plan`
- For units: `Complete Unit XX: [Unit Name]`
- For subunits: `Complete Unit XX: [Unit Name] - [Subunit Name]`

Body (after blank line):
- Provide a concise description of what was implemented or changed
- List key files modified or features added
- Keep it focused on the "what" and "why" rather than detailed "how"

Example:
```
Complete Unit 07: Workflow Documentation

Added comprehensive Workflow section to 00_mmdd.md defining a 5-step cycle
for MMDD application: Create Context, Plan and Define, Implementation,
Test and Validate, and Commit. Includes practical tips for maintaining
context and documenting iterations.

Updated 00_main.md to reflect Unit 7 completion and increased project
completion to ~90%.
```

**Before committing:** Ensure the unit's done file is created and `00_main.md` reflects the current project state.

### Workflow Tips

**Reference relevant units:** When starting a new unit, provide the AI with `00_main.md` and any directly related unit files to maintain context.

**Document deviations:** Use the done file to capture what actually happened versus what was planned, and why changes were made.

**Keep iterations visible:** When a unit requires multiple attempts or significant refactoring, consider creating subunits to capture each iteration's learning.

**Context is cheap, confusion is expensive:** When in doubt, spend extra time on Step 1. Five minutes of clarification prevents hours of rework.

## Usage

1. **Setup**: Create [00_main.md](00_main.md) and dev_log/ directory
2. **Plan Units**: Define 3-5 initial development phases
3. **Work Systematically**: Complete units sequentially, document AI interactions
4. **Track Progress**: Update [00_main.md](00_main.md) status regularly
5. **Provide Context**: Reference unit files when working with AI tools
