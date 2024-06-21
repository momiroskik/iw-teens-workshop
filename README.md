# Setup/Startup local enviorement for BE & FE

## Introduction

The `start_projects.sh` script is designed to automate the startup process for projects.

## Setting Permissions

If you encounter a "permission denied" error when trying to execute the script on Unix-based operating systems like macOS and Linux, follow these steps:

1. **Check Current Permissions**:
   Use the following command to view the current permissions of the script:

   ````
   ls -l start_projects.sh
   ````

This command will display something like `-rw-r--r--`, indicating the current permissions of the script.

2. **Grant Execute Permission**:
To make the script executable, use the `chmod` command with `+x`:


This command adds the execute permission (`+x`) to the script, allowing it to be run.

   ````
   chmod +x start_projects.sh
   ````

3. **Verify Permissions**:
Check the permissions again to confirm that execute permission has been added:

   ````
   ls -l start_projects.sh
   ````

Now, the output should show `-rwxr-xr-x`, indicating that the script is executable (`rwx` for the owner, `rx` for group and others).

## Running the Script

Once you have set the proper permissions, you can execute the script as follows:



`./start_projects.sh`

This command will execute the script, automating the startup process for your projects.

## Notes

- Ensure that you are in the correct directory containing `start_projects.sh` when executing the script.