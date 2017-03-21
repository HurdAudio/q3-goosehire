# GooseHire

**Goose your resume. Get hired.**

An online tool for matching skill sets to job descriptions, utilizing the Indeed API for job search.

Our current deployed version is here: https://q3-goosehire.herokuapp.com/



![alt text](https://github.com/mehrimo/q3-goosehire/blob/master/app/public/images/goosehire-homepage.png?raw=true)

### Features

1. The **home page** allows a user to search for a specific job through skills and location.
2. The **job list page** will provide a list of matching jobs based on the skills they entered and the location. 
3. When the user clicks on a job, they will land on the  **job view page** featuring a word cloud of the top rated skills for that speicific job. The larger the word, the more often it was used in the description and thus, more important. 
4. The user has the option to update their skills to better align with the job posting and paste in their resume through the copy to clipboard feature. 
5. The user can also review the job description and link to the full posting on Indeed.com.

### Technologies Used

1. **Indeed API:** Used to get job posting data.
2. For the front end, we used **AngularJS**, **Pure CSS** and a few **Bootstrap** features. 
3. To build our database, we used **MongoDB**, **Mongoose** and **Express**.