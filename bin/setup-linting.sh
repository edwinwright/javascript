#!/bin/sh
# Adds linting to a project

npm install --save-dev eslint

# Create the config file
cat << EOF > .eslintrc
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
EOF

# TODO: Add a scripts command to package.json

