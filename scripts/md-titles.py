import os
import re

# Function to generate title from filename
def generate_title(filename):
    # Remove the extension
    base = os.path.splitext(filename)[0]
    # Remove numbers
    base = re.sub(r'\d+', '', base)
    # Replace dashes and underscores with spaces
    base = base.replace('-', ' ').replace('_', ' ')
    # Convert to title case
    title = base.title()
    return title.strip()

# Function to add frontmatter to a single file
def add_frontmatter(file_path):
    # Extract the filename
    filename = os.path.basename(file_path)
    # Generate the title
    title = generate_title(filename)
    # Create the frontmatter content
    frontmatter = f"---\ntitle: {title}\n---\n\n"

    # Read the original file content with utf-8 encoding
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Write the frontmatter followed by the original content with utf-8 encoding
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(frontmatter + content)

# Function to process all markdown files in the current directory
def process_all_files():
    # Use the current directory
    current_directory = os.getcwd()
    for filename in os.listdir(current_directory):
        if filename.endswith('.md'):
            file_path = os.path.join(current_directory, filename)
            try:
                add_frontmatter(file_path)
                print(f"Frontmatter added to {filename}")
            except UnicodeDecodeError as e:
                print(f"Failed to process {filename} due to encoding error: {e}")

# Process all files in the current directory
process_all_files()
