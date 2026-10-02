#!/bin/bash

# Target the current directory since you are running it from inside the root
TARGET_DIR="."

echo "Starting deep renaming process inside: $(pwd)"

# -depth processes files before their parent folders.
# -iname makes the search case-insensitive.
find "$TARGET_DIR" -depth -iname "javascript-*" | while read -r item; do
    # Skip the script file itself just in case
    if [[ "$item" == *"$0"* ]]; then
        continue
    fi

    # Extract path and file/folder name
    dir=$(dirname "$item")
    base=$(basename "$item")
    
    # Case-insensitive substitution: Replace 'javascript-' or 'JavaScript-' with 'js-'
    shopt -s nocasematch
    new_base="${base/javascript-/js-}"
    shopt -u nocasematch
    
    # Double quotes handle spaces in paths safely
    mv "$item" "$dir/$new_base"
    echo "Renamed: $base -> $new_base"
done

echo "All matching files and folders have been updated!"
