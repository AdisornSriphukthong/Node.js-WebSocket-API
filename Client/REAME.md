# Step1: npm init -y
* if cannot be loaded 
because running scripts is disabled on this system. For more 
information, see about_Execution_Policies at
["termianal: Set-ExecutionPolicy Unrestricted -Scope CurrentUser"]

Step2: npm install --save-dev typescript ts-node @types/node ts-node-dev
Step3: npx tsc --init
Step4: Create folder src and create file index.ts
Step5: Change main in file package.json to index.ts
Step6: Add ["dev": "ts-node-dev --respawn --transpile-only src/index.ts"] below test of script in file package.json


