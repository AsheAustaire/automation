## How to Make a New Experience
1. Create Name Of Experience in "workflows" folder
2. Create "Automator" workflow matching the name of the folder
3. Profit

## Pending Tasks
- [ ] Alphabetize Order of Workflows
- [ ] Discover Heirarchy for Workflows
- [ ] Refactor And Make Code in a Functional style


## I want to spend as little time on a computer as possible . . . 

Why . . .

• I get tired of being on a computer all day
• This philosophy promotes more efficient computing habbits. 
• Computers aren't as dynamic/interesting/exciting as people
• I like spending my time thinking like a human, not a computer

This movement away from roboticism requires some planning. I intend to use my skills on a computer to reduce my time using computers while allowing me to continue profiting from their usefulness. 

How . . . 

• I'll build a dashboard to quickly access commonly used configurations. 

Technical Implementation . . . 

Environments are an organizational tool for workflows. 

Workflows are directories which contain an all necessary automation for a specific task.

Asheboard script scans the ./workflows directory for all workflows.
/.workflows contains workflow directories which must have a json config file.
/.components contain common workflows