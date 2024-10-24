# Project Readme

## site links
[Live Site](https://noted-eeafd.web.app) 

## dev testing 
Run testing  / dev server
- `npm start`

## firebase deployment / setup

##### Deploy a production page
- should deploy a build every time a change is pushed/megerd to main git branch -- DISABLED

##### if auto prod build fails
- `npm run build`
- `firebase deploy`

[link to firebase setup](https://www.freecodecamp.org/news/how-to-deploy-a-react-app-with-firebase/) 

[Live Site](https://noted-eeafd.web.app) 

# TODO 
- move all firebase functions to utils?
- refetch / render note every x seconds 
- Auth
    - SignUp / SignIn `login.jsx`
    - only signed in users can accuses the db
    - check the user is supposed to have accuses to the note


# Milestone
- Other ideas
    - Pin notes?
    - Synchronization between two devices/tabs
    - Cool new note, expand area to enter note, like keep functionality.
    - Edit automatically pops the text back up to the note editing area (like keep). (week 7)

- Tasks and Schedule (Week = 8-10 hours - 126 hours total)
    - ~~Week 01 = project research and brainstorming~~
    - ~~Week 02 = finish proposal / install node and react tools~~
    - Week 03 = Prototype add / remove notes in react page - no backend
    - Week 04 = clean up and css and react ensure nice page layout
    - Week 05 = responsive design - mobile / desktop
    - Week 06 = set up backend and get data moving back and forth
    - Week 07 = set up front end to use and send backend data 
    - Week 08 = note editing capabilities

    - Week 09 = set a due dates on note / have an indicator if that time has passed
    - Week 10 = login page / multi users (each data entry needs user ties??)
    - Week 11 = web notifications
    - Week 12 = clean up testing and fixes
    - Week 13 = Final clean up / testing and fixes


## resources
- [FireBase CRUD](https://www.youtube.com/watch?v=2hR-uWjBAgw) 

- [Firebase React Course For Beginners](https://www.youtube.com/watch?v=2hR-uWjBAgw) 
- [Building Your first React Web Application](https://www.youtube.com/watch?v=NzpbupWoIV4) 
- [Axios docs](https://axios-http.com/docs/api_intro) 
- [react rest APIs](https://www.freecodecamp.org/news/how-work-with-restful-apis-in-react-simplified-steps-and-practical-examples/#heading-31-the-fetch-api) 

#### firebase docs
- [rest API code](https://firebase.google.com/docs/firestore/use-rest-api#making_rest_calls) 
- [rest API requests](https://firebase.google.com/docs/firestore/reference/rest/) 

