# webbdew_test

alias.logs=log --oneline --all
alias.logg=log --oneline --graph --all
alias.last=log -1 HEAD
alias.unstage=reset HEAD --
alias.lol=log --graph --all --pretty=format:"%C(yellow)%h%Creset%C(cyan)%C(bold)%d%Creset %C(cyan)(%cr)%Creset %s"
alias.ls-tracked=ls-tree -r HEAD --name-only
