# CS 260 Notes (Term 2)

Vite:
npm install -D vite 
npm run dev


Running with local backend:
- navigate to /startup and run "npm run dev"
- navigate to /startup/service in a different bash terminal and run "node index.js"
- will run database on localhost:4000/api

Building:
- navigate to /sartup/service and run "npm run build"
- copy files into public by running "cp -r dist service/public"
    - in /service/public run "mv dist/*"
    - then run "rmdir dist"
- in /startup/service run "node index.js"
- navigate to localhost:4000 to see all running at that port

Deploy:
- run deployService.sh file