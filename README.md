# 000_Training Repo
example repo for new hire learning

Welcome to the art of banner making! You've completed your first step by successfully downloading a repo from Git.
You will do this every time you are added onto a project for which there are banners.

---

First things first is understanding how repositories work. Regardless of which git client you use, there are 5 things
we need to be concerned with: Commits, Pushes, Pulls, Branches, and Merges.

- Commits
When the repo is cloned to your system any files you add, move, or save within it will register in your git client 
program as a change. These changes must be committed to your local server before they can be saved to the remote
server. Select part or all of the files that have been changed since your last pull, add a discription of those changes
to the text field, and click Commit.

- Pushes
Once there is one or more commits on the local server, they can be pushed to the remote server. Once on the remote server,
they can be accessed by others on the repo. 

- Pulls
The opposite of pushes. To get changes to the repo made by others, you must pull the changes down from the remote server on
to your local server. Always pull when you can to ensure you are not working in an older version of a file. If you make
changes to a file that has been updated by someone else, and you hadn't pulled those person's changes yet, you will register
conflicts. 

- Branches
Branching out of the Master branch is a good way to prevent conflicts if two or more people are working inside of the same
file. Branching (or forking) creates a duplicate of the repo from the branch point, and allows you to make changes while
not affecting any files in any of the other branches. Branches are also a good way to make different versions of the same
file without having to create a second file, for instance if you are making multiple versions for client approval. You are
able to switch from branch to branch and your files will update accordingly.

- Merges
The opposite of branching. Merging is consolidating two branches into one. This is a destructive action, so be sure of what
is being merged before you do. This is usually done when actions inside of a branch are being applied to the whole project,
and thus the reason for the branch is no longer needed. Example: multiple branches created for multiple motion tests; a 
decision was chosen, and the motion test picked is merged into the Master branch. 
