<pre>

Revert to a commit # (5c4875f):
  git checkout branch111                      // goto branch branch111
  git pull                                    // get new changes
  git log --oneline --decorate --graph        // see commit numbers

  git reset --hard 5c4875f                    // go back to commit 5c4875f
  git clean -f -d                             // what is this?
  git log --oneline --decorate --graph        // see commit numbers

  git status                                  // will show - pending # commits
  git fetch --all                             // what is this? - get others changes?

  git status                                  // will show - pending # commits
  git push -u origin +branch111               // push to remote branch branch111

</pre>
