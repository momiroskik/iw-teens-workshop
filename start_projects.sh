#!/bin/bash

# If your are running on a Unix-based operating system and you are unable to start the script that you need to
# follow this command to give proper permission
# ls -l start_projects.sh will give you something like -rw-r--r--
# chmod +x start_projects.sh will add +x to permission and now you would be able to run it


are_node_modules_installed() {
    if [ -d "node_modules" ]; then
        echo "node_modules found."
    else
        echo "Installing node_modules..."
        npm install
    fi
}

run_npm_script() {
    project_location="$1"
    script_command="$2"

    echo "----------------------------------------"
    echo "Running npm command in $project_location"

    cd "$project_location"
    are_node_modules_installed
    npm run "$script_command"
}

# Main script

# Core.EDnevnik.API settings
api_project_location="Core.EDnevnik.API"
api_startup_script="dev"
api_default_port=3333

# Core.EDnevnik.FE settings
fe_project_location="Core.EDnevnik.FE"
fe_startup_script="start"
fe_default_port=3000

run_npm_script "$api_project_location" "$api_startup_script" &
run_npm_script "$fe_project_location" "$fe_startup_script" &

wait

echo "All npm commands executed."
