#!/bin/bash

# Set the base directories
SRC_DIR="./projects/ngx-guided-tour/src/lib"
DIST_DIR="./dist/ngx-guided-tour/css"

# Compile the base theme
sass "${SRC_DIR}/themes/guided-tour-base-theme.scss" "${DIST_DIR}/themes/guided-tour-base-theme.css"

# Check if the first compilation was successful
if [ $? -eq 0 ]; then
    echo "Base theme compilation successful."
else
    echo "Error: Base theme compilation failed."
    exit 1
fi

# Compile the component styles
sass "${SRC_DIR}/guided-tour.component.scss" "${DIST_DIR}/guided-tour.component.css"

# Check if the second compilation was successful
if [ $? -eq 0 ]; then
    echo "Component styles compilation successful."
else
    echo "Error: Component styles compilation failed."
    exit 1
fi

echo "All compilations completed successfully."
