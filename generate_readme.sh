#!/bin/bash

# Define the output file
OUTPUT_FILE="README.md"

echo "Generating $OUTPUT_FILE with local PDF links..."

# Write the header content
printf "# 🚀 Lär dig JavaScript utan tjafs – Kursmaterial\n\n" > "$OUTPUT_FILE"
printf "Välkommen till kursmaterialet! Här hittar du alla kompendier och laborationer i PDF-format.\n\n" >> "$OUTPUT_FILE"
printf "## 📚 Kursmoduler (Teori & PDF)\n\n" >> "$OUTPUT_FILE"

# Find all PDF files, sort them, and append markdown links safely
find . -type f -name "*.pdf" | sort | while read -r file; do
    # Remove the leading './' from the find output
    clean_path=$(echo "$file" | sed 's|^\./||')
    
    # Extract the filename without the .pdf extension for the link text
    filename=$(basename "$file" .pdf)
    
    # Append the formatted markdown link using < > to handle spaces seamlessly
    echo "* [$filename](<$clean_path>)" >> "$OUTPUT_FILE"
    echo "Added link for: $filename"
done

echo "Done! Your $OUTPUT_FILE has been successfully updated with all working links."
