#!/usr/bin/env node

/**
 * Agile AI Framework Initializer
 *
 * This script initializes the AI Agile Development Framework structure in a target project.
 * It creates the necessary directory structure and template files for backlog management,
 * sprint planning, role definitions, and project memory.
 *
 * Usage:
 *     node agile_init.js --target /path/to/project --name "Project Name"
 *
 * Author: AnPH
 * Date: April 22, 2025
 */

const fs = require('fs');
const path = require('path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

/**
 * Class responsible for initializing the AI Agile Framework structure
 */
class AgileInitializer {
  /**
   * Initialize the AgileInitializer with target path and project name
   * @param {string} targetPath - Path to the target project where the framework will be initialized
   * @param {string} projectName - Name of the project
   */
  constructor(targetPath, projectName) {
    this.targetPath = targetPath;
    this.projectName = projectName;
    this.agileRoot = path.join(targetPath, '.agile');
    this.today = new Date();
    // Calculate sprint end date (2 weeks from today)
    this.sprintEnd = new Date(this.today);
    this.sprintEnd.setDate(this.today.getDate() + 14);
  }

  /**
   * Format date to YYYY-MM-DD string
   * @param {Date} date - The date to format 
   * @returns {string} Formatted date string
   */
  formatDate(date) {
    return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD
  }

  /**
   * Create the necessary directory structure for the framework
   */
  createDirectoryStructure() {
    // Create main directories
    fs.mkdirSync(this.agileRoot, { recursive: true });
    fs.mkdirSync(path.join(this.agileRoot, 'sprints'), { recursive: true });
    fs.mkdirSync(path.join(this.agileRoot, 'memory'), { recursive: true });
    
    console.log(`✅ Created directory structure in ${this.agileRoot}`);
  }

  /**
   * Create the backlog.md file with initial template
   */
  createBacklogFile() {
    const content = `# Product Backlog

## Format
Each item follows this structure:
\`\`\`
### [PBI-{id}] {Short Title}
- **Priority**: {High|Medium|Low}
- **Estimate**: {Story Points or T-shirt Size}
- **Description**: {User story or detailed description}
- **Acceptance Criteria**:
  - [ ] Criterion 1
  - [ ] Criterion 2
- **Notes**: {Additional context}
\`\`\`

## Current Backlog Items

### [PBI-001] Initial Project Setup
- **Priority**: High
- **Estimate**: 3 points
- **Description**: As a developer, I need the initial project structure and dependencies set up so that development can begin.
- **Acceptance Criteria**:
  - [ ] Repository initialized with proper structure
  - [ ] Base dependencies installed
  - [ ] Development environment configured
  - [ ] Basic README documentation
- **Notes**: Follow team coding standards and conventions

### [PBI-002] Core Feature Implementation
- **Priority**: High
- **Estimate**: 8 points
- **Description**: As a user, I need the core functionality of ${this.projectName} to be implemented so that I can begin using the basic features.
- **Acceptance Criteria**:
  - [ ] Feature requirements documented
  - [ ] Implementation completed
  - [ ] Unit tests written
  - [ ] Integration tests passed
- **Notes**: Focus on usability and performance

### [PBI-003] Documentation
- **Priority**: Medium
- **Estimate**: 5 points
- **Description**: As a user and developer, I need comprehensive documentation so that I can understand how to use and contribute to the project.
- **Acceptance Criteria**:
  - [ ] User documentation created
  - [ ] API documentation updated
  - [ ] Code comments added
  - [ ] Examples provided
- **Notes**: Documentation should follow project standards
`;
    
    fs.writeFileSync(path.join(this.agileRoot, 'backlog.md'), content);
    
    console.log('✅ Created backlog.md file');
  }

  /**
   * Create the first sprint file with initial template
   */
  createSprintFile() {
    const content = `# Sprint 1 Plan

- **Sprint Goal**: Establish project foundation and implement core features
- **Duration**: 2 weeks
- **Start Date**: ${this.formatDate(this.today)}
- **End Date**: ${this.formatDate(this.sprintEnd)}

## Sprint Backlog

### [SP1-001] Project Repository Setup
- **Source**: [PBI-001]
- **Assignee**: TBD
- **Estimate**: 2 points
- **Tasks**:
  - [ ] Initialize repository structure
  - [ ] Configure development environment
  - [ ] Set up basic CI/CD pipeline
  - [ ] Create initial README documentation

### [SP1-002] Core Feature Design
- **Source**: [PBI-002]
- **Assignee**: TBD
- **Estimate**: 3 points
- **Tasks**:
  - [ ] Research technical approaches
  - [ ] Create detailed design document
  - [ ] Review design with team
  - [ ] Finalize architecture decisions

### [SP1-003] Core Feature Implementation
- **Source**: [PBI-002]
- **Assignee**: TBD
- **Estimate**: 5 points
- **Tasks**:
  - [ ] Implement base components
  - [ ] Create unit tests
  - [ ] Integrate with existing systems
  - [ ] Document implementation details

# Sprint 1 Daily Updates

## Format
\`\`\`
### Day {N}: {Date}
#### Progress
- {Task}: {Update}
- {Task}: {Update}

#### Blockers
- {Description of any blockers}

#### Plan for Next Day
- {Tasks planned for tomorrow}
\`\`\`

## Daily Updates

### Day 1: ${this.formatDate(this.today)}
#### Progress
- Sprint planning completed
- SP1-001: Started repository initialization

#### Blockers
- None

#### Plan for Next Day
- Continue repository setup
- Begin environment configuration
`;
    
    fs.writeFileSync(path.join(this.agileRoot, 'sprints', 'sprint1.md'), content);
    
    console.log('✅ Created sprint1.md file');
  }

  /**
   * Create the roles.md file with role definitions
   */
  createRolesFile() {
    const content = `# Product Manager Agent

## Responsibility
Define product requirements, priorities, and maintain the product backlog to maximize business value.

## Activation
Call this agent with: \`@PM: {your request}\`

## Capabilities
- Product backlog management
- Feature prioritization
- User story creation and refinement
- Sprint planning facilitation
- Market and user needs analysis
- Roadmap planning

## Thinking Framework
1. Assess business value and user impact
2. Consider technical feasibility and complexity
3. Balance short-term needs with long-term vision
4. Prioritize based on dependencies and constraints
5. Validate requirements against user needs

## Interaction Style
- Focus on customer/user value
- Clarify requirements through examples
- Provide context for technical decisions
- Ask questions to refine vague requirements
- Maintain a strategic product perspective

# Developer Agent

## Responsibility
Design, implement, and maintain high-quality code that fulfills product requirements.

## Activation
Call this agent with: \`@DEV: {your request}\`

## Capabilities
- Technical design and architecture
- Code implementation
- Code review and refactoring
- Technical documentation
- Technical debt assessment
- Performance optimization

## Thinking Framework
1. Evaluate multiple implementation approaches
2. Consider performance, scalability, and maintainability
3. Apply appropriate design patterns
4. Anticipate edge cases and error scenarios
5. Follow project coding standards and best practices

## Interaction Style
- Provide detailed technical explanations
- Suggest code snippets and implementation approaches
- Identify potential technical challenges
- Ask for clarification on technical requirements

# QA Engineer Agent

## Responsibility
Ensure product quality through comprehensive testing strategies and quality controls.

## Activation
Call this agent with: \`@QA: {your request}\`

## Capabilities
- Test planning and strategy
- Test case creation
- Defect identification and reporting
- Quality metrics tracking
- Automated testing guidance
- Performance and security testing

## Thinking Framework
1. Consider various testing methods (unit, integration, e2e)
2. Identify potential failure points and edge cases
3. Evaluate test coverage and completeness
4. Balance testing effort with risk assessment
5. Think from the end-user perspective

## Interaction Style
- Focus on validation and verification
- Look for edge cases and potential problems
- Suggest test approaches and scenarios
- Ask questions to clarify expected behavior

# Scrum Master Agent

## Responsibility
Facilitate Agile processes, remove impediments, and enable team productivity.

## Activation
Call this agent with: \`@SM: {your request}\`

## Capabilities
- Sprint facilitation
- Impediment removal
- Team productivity improvement
- Process refinement
- Metrics and reporting
- Collaboration improvement

## Thinking Framework
1. Identify process bottlenecks and inefficiencies
2. Promote transparency and communication
3. Balance process discipline with adaptability
4. Focus on continuous improvement
5. Maintain team focus on sprint goals

## Interaction Style
- Process-oriented approach
- Ask probing questions to identify issues
- Suggest process improvements
- Highlight blockers and dependencies
- Neutral facilitator perspective`;
    
    fs.writeFileSync(path.join(this.agileRoot, 'roles.md'), content);
    
    console.log('✅ Created roles.md file');
  }

  /**
   * Create the project memory file to store important decisions and context
   */
  createProjectMemory() {
    const content = `# Project Memory

This document captures important decisions, context, and learnings throughout the project lifecycle.

## Technology Decisions

### [${this.formatDate(this.today)}] Initial Technology Stack
- **Decision**: [Describe key technology decisions]
- **Alternatives Considered**: 
  - [Alternative 1]
  - [Alternative 2]
  - [Alternative 3]
- **Rationale**: [Explain the reasoning behind the decision]
- **Implications**: 
  - [Implication 1]
  - [Implication 2]
  - [Implication 3]

## Architecture Insights

### [Section for Architecture Decisions]
[Describe key architectural patterns and decisions]

## Development Patterns

### Coding Standards
[Document agreed coding standards and patterns]

### Testing Strategy
[Document testing approach and coverage expectations]

## Project History

### Key Milestones
- [${this.formatDate(this.today)}] Project initiated
`;
    
    fs.writeFileSync(path.join(this.agileRoot, 'memory', 'project-memory.md'), content);
    
    console.log('✅ Created project-memory.md file');
  }

  /**
   * Create the master prompt file with the framework activation prompt
   */
  createMasterPrompt() {
    const content = `# AI Agile Development Assistant

## Framework Initialization
You are now an AI Agile Development Assistant that helps manage software development using Agile methodology. You can take on multiple specialized roles including Product Manager, Developer, QA Engineer, and Scrum Master.

## Role Switching Protocol
When addressed with @{RoleName}, switch to that specialized role and respond accordingly:
- @PM - Product Manager: Focus on requirements, user stories, and business value. Full Agent Job Description at [product-manager.md](./roles/product-manager.md)
- @DEV - Developer: Focus on code, architecture, and technical implementation. Full Agent Job Description at [developer.md](./roles/developer.md)
- @QA - QA Engineer: Focus on testing strategies, quality, and verification. Full Agent Job Description at [qa-engineer.md](./roles/qa-engineer.md)
- @SM - Scrum Master: Focus on process, blockers, and team coordination. Full Agent Job Description at [scrum-master.md](./roles/scrum-master.md)
- @Daily - Daily Standup: Provide daily updates on progress, blockers, and plans.
- @Memory - Project Memory: Access project memory for context and decisions.

## File Structure Understanding
You maintain a virtual file structure for this project:
- .agile/backlog.md - Product backlog items
- .agile/sprints/{sprint_number}/ - Sprint planning and tracking
- .agile/sprints/{sprint_number}/tasks - Task tracking
- .agile/memory/ - Project knowledge and decisions

## Core Functions
1. Create and update backlog items
2. Plan and track sprints
3. Break down user stories into tasks
4. Provide role-specific expertise
5. Maintain project memory
6. Generate documentation

## Interaction Style
- Ask clarifying questions when requirements are ambiguous
- Maintain Agile terminology and practices
- Keep track of project status through virtual files
- Provide concrete, actionable responses
`;
    
    fs.writeFileSync(path.join(this.agileRoot, 'master-prompt.md'), content);
    
    console.log('✅ Created master-prompt.md file');
  }

  /**
   * Create a README.md file for the .agile directory with usage instructions
   */
  createReadmeFile() {
    const content = `# AI Agile Framework Usage Guide

## Basic Commands

1. **Create a New Backlog Item**:
\`\`\`
@PM: Add backlog item for "Feature X" with priority High
\`\`\`

2. **Plan a Sprint**:
\`\`\`
@PM: Plan sprint 2 with focus on product listing features
\`\`\`

3. **Get Implementation Guidance**:
\`\`\`
@DEV: How should we implement the authentication flow?
\`\`\`

4. **Create Test Cases**:
\`\`\`
@QA: Generate test cases for the user registration feature
\`\`\`

5. **Daily Update**:
\`\`\`
@Daily: Update progress on SP1-001, completed form validation
\`\`\`

6. **Project Memory Access**:
\`\`\`
@Memory: Why did we choose Auth0 for authentication?
\`\`\`

## Workflows

### Sprint Planning
1. \`@PM: Suggest items for next sprint\`
2. Review and adjust
3. \`@PM: Finalize sprint plan with these items\`

### Task Implementation
1. \`@DEV: Technical approach for [task]\`
2. \`@QA: Test criteria for [task]\`
3. Implementation
4. \`@QA: Review implementation of [task]\`
`;
    
    fs.writeFileSync(path.join(this.agileRoot, 'README.md'), content);
    
    console.log('✅ Created README.md file with usage instructions');
  }

  /**
   * Initialize the complete framework structure
   */
  initialize() {
    console.log(`Initializing AI Agile Framework for project: ${this.projectName}`);
    
    this.createDirectoryStructure();
    this.createBacklogFile();
    this.createSprintFile();
    this.createRolesFile();
    this.createProjectMemory();
    this.createMasterPrompt();
    this.createReadmeFile();
    
    console.log('\n🎉 AI Agile Framework initialized successfully!');
    console.log(`Framework files created in: ${this.agileRoot}`);
    console.log('\nYou can now start using the framework with commands like:');
    console.log('  @PM: Add backlog item for "Feature X" with priority High');
    console.log('  @DEV: How should we implement the authentication flow?');
    console.log('  @QA: Generate test cases for the user registration feature');
    console.log('  @SM: What blockers should we address in tomorrow\'s standup?');
  }
}

/**
 * Main function to execute the script
 */
function main() {
  const argv = yargs(hideBin(process.argv))
    .option('target', {
      alias: 't',
      type: 'string',
      description: 'Target project path where the framework will be initialized',
      demandOption: true
    })
    .option('name', {
      alias: 'n',
      type: 'string',
      description: 'Name of the project',
      demandOption: true
    })
    .help()
    .alias('help', 'h')
    .argv;

  // Check if target directory exists
  if (!fs.existsSync(argv.target) || !fs.statSync(argv.target).isDirectory()) {
    console.error(`Error: Target path ${argv.target} is not a valid directory`);
    process.exit(1);
  }

  // Initialize the framework
  const initializer = new AgileInitializer(argv.target, argv.name);
  initializer.initialize();
}

// Execute main function if script is run directly
if (require.main === module) {
  main();
}

module.exports = AgileInitializer;
