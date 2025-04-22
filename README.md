# ############ #
# JUST TESTING #
# ############ #

# AI Agile Development Framework

A structured system for managing software development with AI assistance organized by roles, tasks, and workflows.

## Overview

The AI Agile Development Framework provides a systematic approach to integrate AI assistance into Agile software development processes. It enables development teams to leverage AI capabilities through specialized roles, structured workflows, and persistent project memory.

## Features

- **Role-based AI Assistance**: Interact with specialized AI roles including Product Manager, Developer, QA Engineer, and Scrum Master
- **Project Memory**: Maintain knowledge and decisions throughout the project lifecycle
- **Structured Workflows**: Follow established Agile ceremonies and practices
- **Comprehensive Documentation**: Generate and maintain project documentation automatically

## Directory Structure

```
.agile/
├── backlog.md          # Product backlog items
├── sprints/            # Sprint planning and execution
├── roles/              # Role-specific agent definitions
└── memory/             # Project insights and learnings
```

## Getting Started

1. Clone this repository
2. Set up the initial project structure
3. Initialize the framework with the master prompt
4. Start interacting with the AI roles

## Usage

### Basic Commands

1. **Create a New Backlog Item**:
```
@PM: Add backlog item for "Feature X" with priority High
```

2. **Plan a Sprint**:
```
@PM: Plan sprint 2 with focus on product listing features
```

3. **Get Implementation Guidance**:
```
@DEV: How should we implement the authentication flow?
```

4. **Create Test Cases**:
```
@QA: Generate test cases for the user registration feature
```

5. **Daily Update**:
```
@Daily: Update progress on SP1-001, completed form validation
```

6. **Project Memory Access**:
```
@Memory: Why did we choose Auth0 for authentication?
@Memory: save project memory
```

### OS Commands:

1. **Init Agile Project Structure**:
```
node commands/init-agile-project.js
```


### Common Workflows

#### Sprint Planning
1. `@PM: Suggest items for next sprint`
2. Review and adjust
3. `@PM: Finalize sprint plan with these items`

#### Task Implementation
1. `@DEV: Technical approach for [task]`
2. `@QA: Test criteria for [task]`
3. Implementation
4. `@QA: Review implementation of [task]`

## Role Descriptions

- **@PM - Product Manager**: Focuses on requirements, user stories, and business value
- **@DEV - Developer**: Focuses on code, architecture, and technical implementation
- **@QA - QA Engineer**: Focuses on testing strategies, quality, and verification
- **@SM - Scrum Master**: Focuses on process, blockers, and team coordination

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
