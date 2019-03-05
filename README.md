If you don't have push (write) access to an upstream repository, then you can pull commits from that repository into your own fork.

<<<<<<< HEAD
<<<<<<< HEAD
Open Terminal.

Change the current working directory to your local project.

Check out the branch you wish to merge to. Usually, you will merge into master.
<<<<<<< HEAD

$ git checkout master
Pull the desired branch from the upstream repository. This method will retain the commit history without modification.

$ git pull https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git BRANCH_NAME
If there are conflicts, resolve them. For more information, see "Addressing merge conflicts".
=======
>>>>>>> 002cf4e642ccf9cf4ab2a9a69a27c36f3b602a31

Commit the merge.

Review the changes and ensure they are satisfactory.
Push the merge to your GitHub repository.

$ git push origin master

=======
>>>>>>> 78042d310447f20e6f132a975d965c2f3f7fe256
