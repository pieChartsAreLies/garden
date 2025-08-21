---
publish: "false"
---
I had the misfortune, like many others recently, of being laid off from work, so I have embarked upon everyone's favorite time waster, hunting for a new job. I wanted to set up a format that would allow my to track and manage my job search using Obsidian as my hub. This serves a few purposes for me.

1. Captures the list of companies that I applied to
2. Enables me to track the metrics of my job hunt
3. Allows me to see what roles I have "in flight" vs. applied vs. declined
4. Centralizes all notes about a given role, the posting at the time of application, and allows me to keep track of who I spoke to.

I haven't seen any other examples for this workflow, so was hoping that I could get some suggestions for improvements/enhancements that would improve it. It may be overkill for some, but for me, as I am managing my network, quite a few different roles, and multiple in-flight interviews, I wanted to make sure I wasn't dropping the ball.

##### How it works:

I start with a 'Job Post Template' that I use for any role that I want to apply for. I title it 'Company Name - Role' and the template uses the \#JobPost tag. That tag is used by 'Auto Note Mover' to place all roles into a single fold to keep things tidy.

Within the template, I have the following front matter elements defined:

- *Company* - Name of the company (I use this across my people profiles as well)
- *Type* - This is used across many of my notes. For these notes it's 'Job Post'
- *Role* - Job role title. Used later on.
- *Applied* - this is a binary field
- *date_applied* - date field to capture when I apply to a role
- *recruiter_screen* - binary field denoting if I get selected to be screened by the recruiter
- *interview* - binary field denoting kicking off the formal interview process
- *rejection* - binary field that I use to define if I receive a rejection
- *declined* - binary field that I use if I decline the role or remove myself from consideration
- *joburl* - empty string field that I place the job posting URL.

Within the body of the template my only area is "Job Text" where I dump the job text from the listing for easy access.

Typically, I will only do minimal formatting on the role text until I have a recruiter screen scheduled. At that point, I'll clean it up, highlight key terms, run the role through GPT to pull out the top-10 skills, etc. Pretty much do whatever I need to do to wrap my head around how my background applies to the role and where I may have issues answering questions or need to think of stories that apply to the types of work that will be requested.

###### Job Hunt Tracker
The summary of all this information is in a note titled 'Job Hunt Tracker', which has the following sections:

- To-Do
- To Apply
- In-Flight
- Jobs Applied For
- Rejections/Declined
- Closed Tasks

*To-Do* - Simple list of tasks using the 'Tasks' plugin. I denote all tasks related to my job hunt with the #JobHunt tag.
>[!Note]
>For any code, note that you need to include the triple ticks before the operator to enable Obsidian to see the code ( ``` )

>[!code] To-Do
>tasks
>tags includes #JobHunt 
>not done

*To Apply* - This is a list of any role that I created a page for but never applied. This was more applicable at the start of my hunt, when I went around and collected a bunch of roles that I was interested in before I was applying. Not that I am a few weeks into my search, if I find a role, I apply, so it's mostly empty unless there is a role that requires a specific adjustment to my resume.

Note - I recognize that I should be adjusting each and every resume to match the job description, and I likely will, but I just started my job hunt and it was more important to saturate the current open roles to establish a base application pipeline than it was to toil away at each and every role to get the resume to match.

>[!Code] To Apply
>dataview 
>table
>company as "Company",  
>role as "Role" 
>from "Personal/Job Hunt/Companies" 
>where contains(file.tags, "#JobPost")
>and applied = false
>sort "date applied" desc    `

*In Flight* - This is the table that shows me any role where I have been moved forward in the process but have not been declined. These are what I consider 'active' applications. I should probably add another bit of front-matter to my notes that lists the 'next action date' and sort by that. Would likely make it more actionable. I've yet to have more than a handful of these, so it's not been an issue to this point.

>[!Code] In-Flight
>dataview
>table
>company as "Company",
>role as "Role"
>from "Personal/Job Hunt/Companies"
>where contains(file.tags, "#JobPost") 
>and applied = false
> sort "date applied" desc  `

*Jobs Applied For* - This is the core to my job search. It allows me to see any roles that I've applied for so that I don't apply to the same role twice and have a list of jobs that I've applied for across a company. This matters for roles at Amazon, Google, Microsoft, Walmart, etc. where because the organizations are so large, it's possible to find multiple roles that suit my experience.

>[!Code] Jobs Applied For
>dataview
>table
>company as "Company", 
>role as "Role", 
>recruiter_screen as "Phone Screen",
>interview as "Interview",
>rejection as "Rejected",
>dateformat(date_applied, "MM-dd-yyyy") as "Date Applied"
>from "Personal/Job Hunt/Companies"
>where contains(file.tags, "#JobPost")
>and applied = true
>and rejection = false
>sort date_applied desc

*Rejections/Declined* - This captures all the roles that I consider to be closed. It's more for record keeping than anything else.

>[!code] Rejections/Declined
>dataview
>table
>company as "Company", 
>role as "Role",
>recruiter_screen as "Phone Screen",
>interview as "Interview",
>rejection as "Rejected", 
>declined as "Declined", 
>dateformat(date_applied, "MM-dd-yyyy") as "Date Applied"
>from "Personal/Job Hunt/Companies"
>where contains(file.tags, "#JobPost") 
>and applied = true 
>and rejection = true
>or declined = true
>sort date_applied desc

Tasks Completed - More record keeping of all the tasks that I've completed related to the Job Hunt.

>[!Code] Tasks Completed
>tasks
>tags includes #JobHunt 
done

Overall, my process isn't all that complicated, but I don't feel the need to over complicate it. When I do get a recruiter screen, I put all of my notes for the screen directly within the Job Application note, so it all stays together. I will create an individual people profile for every person that I speak to within a company. In that profile, I'll write quick notes about who they are, their role, when I spoke to them and I will link it back to the job post note.

If I do make a custom resume or cover letter for a specific role, I will dump that into the Job Post note, as well as any notes that I generate using GPT to review the posting or prep for speaking to a recruiter.

I just started this process 2 weeks ago, so it's still pretty fresh and I'd love to hear others feedback. Eventually I'll create a metrics summary page to visualize my application cadence, flow and overall statistics around the search. Given what I am already seeing, it'll be greatly demoralizing :)

