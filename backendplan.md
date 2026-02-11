signup = user enters details which gets stored in db through POST (check if email already exists. if does tell the user to login) and clicks on create account. navigates to dashboard and can see his entered name beside login button and option of logout inplace of login.

login = user enters details which gets checked in db if it matches. if matches user logs in and navigates to the dashboard and sees his name and logout button. if forgot password user should be redirected to signup page with the email and name he mentioned in login page... when he enters new password there it shout use PUT and update his password.

DB = user information ->id, name, email, password, createdAt
     Task ->id, userId, title, deadline, priority,effort, status, createdAt

Task should appear in the UI when its added. all the previously added tasks must also show on the UI unless deleted by the user.

Calculations = user decides on what basis the decision should be made 
               all the tasks and their all informations must go in the calculation
               for priority basis - give the task based on deadline first. if two or more have same deadline choose based on highest priority. if priority and deadline both are same choose one that takes the lowest effort.
               for sjf - choose that takes minimum time, if clash choose one with high priority, again clash choose based on deadline.
               for balanced scheduling - see fastest approaching deadline, high priority, min effort . if clash give the one with status of "To Do". if none is "To Do" give the "Running".

when clicked on what should i work on next button ... backend should calculate and give the task name and the reason why it chose that .

When a task status is changed to "Completed" -> Keep the task, Change status to Completed, Exclude from scheduling and change styling to light gray-ish.

on refreshing the page, the recommanded task results should be empty again so the user can attempt again.