import readlineSync from 'readline-sync';
import axios from 'axios';
import chalk from 'chalk';

async function taskAdd() {
    try {
        console.clear();
        console.log(`
   ====================================\n
   \tAdd Task\n 
   ====================================`);
        let taskName = readlineSync.question(`Enter the Task Name : `);
        while (!taskName) {
            taskName = readlineSync.question(`Enter Task Name To Continue : `)
        }
        let taskDescription = readlineSync.question(`Enter Task Description : `);
        while (!taskDescription) {
            taskDescription = readlineSync.question(`Enter Task description : `);
        }
        let token = readlineSync.question(`Enter Token : `);
        while (!token) {
            token = readlineSync.question(`Enter Token To continue : `)
        }

        let response = await axios.post('http://172.25.222.167:3010/api/toDos/', {
            taskName: taskName,
            taskDescription: taskDescription
        }, {
            headers: {
                'auth-token': token
            }
        });
        console.log(response.data);
        console.log("Task Added Successfully");

    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            console.error(chalk.red(error.response.data.error));
        } else {
            console.error(error);
        }
    }
}

async function taskReplace() {
    try {
        console.clear();
        console.log(`
   ====================================\n
   \tReplace/update Task\n 
   ====================================`);
        let taskId = readlineSync.question(`Enter Your Task ID : `);
        while (!taskId) {
            taskId = readlineSync.question(`Enter valid Task ID to Continue : `);
        }
        let taskName = readlineSync.question(`Enter Task Name : `);
        while (!taskName) {
            taskName = readlineSync.question(`Enter Valid Task Name : `)
        }
        let taskDescription = readlineSync.question(`Enter Task Description : `);
        while (!taskDescription) {
            taskDescription = readlineSync.question(`Enter Valid Task Description : `)
        }
        let token = readlineSync.question(`Enter your Token : `)
        while (!token) {
            token = readlineSync.question(`Enter Valid Token To continue : `)
        }
        let response = await axios.put('http://172.25.222.167:3010/api/toDos/', {
            taskId : taskId,
            taskName: taskName,
            taskDescription: taskDescription
        }, {
            headers: {
                'auth-token': token
            }
        });
        console.log(response.data);
        console.log("Task Replaced Successfully");
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            console.error(chalk.red(error.response.data.error));
        } else {
            console.error(error);
        }
    }
}

async function taskDelete(){
   try {
    console.clear();
        console.log(`
   ====================================\n
   \tDelete Task\n 
   ====================================`);
   let taskId = readlineSync.question(`Enter Your Task ID to Delete that Task : `);
   while(!taskId){
    taskId = readlineSync.question(`Enter Valid Task ID to Continue : `);
   }
   let token = readlineSync.question(`Enter your Token : `)
        while (!token) {
            token = readlineSync.question(`Enter Valid Token To continue : `)
        }
        let response = await axios.delete('http://172.25.222.167:3010/api/toDos/', {
            data: {
                taskId: taskId 
            },
            headers: {
                'auth-token': token
            }
        });
        console.log(response.data);
        console.log("Task Deleted Successfully");
   
   } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            console.error(chalk.red(error.response.data.error));
        } else {
            console.error(error);
        }
   }

}



async function Fetch() {
    try {
        console.clear();
        console.log(`
   ====================================\n
   \tFetch All ToDos Task\n 
   ====================================`);
       
       let token = readlineSync.question(`Enter your Token : `)
       while (!token) {
           token = readlineSync.question(`Enter Valid Token To continue : `)
       }
       
       const response = await axios.get('http://172.25.222.167:3010/api/toDos/', {
            headers: {
                'auth-token': token
            }
        });
        
        console.log(response.data);
        console.log("Fetched Tasks Successfully");
       
    } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
            console.error(chalk.red(error.response.data.error));
        } else {
            console.error(error);
        }
    }
}



export { taskAdd, taskReplace , taskDelete , Fetch }
