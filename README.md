Pull the desired branch from the upstream repository. This method will retain the commit history without modification.

$ git pull https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git BRANCH_NAME
If there are conflicts, resolve them. For more information, see "Addressing merge conflicts".

Commit the merge.

Review the changes and ensure they are satisfactory.

Push the merge to your GitHub repository.

$ git push origin master