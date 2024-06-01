## Dynamic To-Do List Application

### Overview
This application is a dynamic to-do list with three main sections: Pending, In Progress, and Completed. It allows users to add tasks, move them between sections.

## Screenshot for reference
![todo](https://github.com/royabhi647/train-ticket-booking/assets/98969290/a8b55001-153c-46d6-bffd-dfe2fe7a65b4)

## Sections

1. **Pending**
   - Contains newly added tasks.
   - Each task has a button to move it to the In Progress section.

2. **In Progress**
   - Contains tasks that are currently being worked on.
   - Each task has a button to move it to the Completed section.

3. **Completed**
   - Contains completed tasks, each marked with a timestamp in the format "DD/MM/YY, HH:MM" (e.g., 20/05/2024, 19:50).

4. **Deleted**
   - Each task can be deleted when task is moved from In Progress to Completed.

## Functional Requirements

- **Add New Task**: Users can add tasks to the Pending section with a title and optional description.
- **Move Tasks Between Sections**: Tasks can be manually moved from Pending to In Progress, and from In Progress to Completed.

## Implementation Details

- **Task Structure**: Each task includes a title, an optional description, and a timestamp for completed tasks.
- **Buttons and Actions**:
  - "Start" button in Pending moves the task to In Progress.
  - "Complete" button in the "In Progress" section moves the task to "Completed" and adds a timestamp.
  - "Remove" button deletes the "Completed" task. 

## Technical Requirements

- **Technology Stack**: MERN (MongoDB, Express.js, React.js, Node.js).

## Setup Instructions

1. Clone the repository:
   <pre>git clone https://github.com/royabhi647/mern-todo.git</pre>

2. Install dependencies for client:
   cd client
   <pre>npm install</pre>

3. Install dependencies for server:
   cd server
   <pre>npm install</pre>

4. Start the Server:
   <pre>nodemon start</pre>

5. Start the Client:
   <pre>npm start</pre>