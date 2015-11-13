# Alias
alias cls='clear'
alias ls='ls -ph --show-control-chars'
alias lsa='ls -al --color=auto --show-control-chars'
alias rm='rm -i'
alias cp='cp -i'
alias mv='mv -i'


# Bash info.
# http://originalchoi.tistory.com/19
# https://wiki.kldp.org/HOWTO/html/Adv-Bash-Scr-HOWTO/sample-bashrc.html

# Prompt
# http://www.arwin.net/tech/bash.php

# Basic(기본형)
# \u = User(사용자)
# \h = Host(호스트)
# \W = Current Directory(현재 디렉토리)
# export PS1="[\u@\h\W]$"

# Color Cheatsheet (컬러 치트시트)
# Black       0;30     Dark Gray     1;30
# Blue        0;34     Light Blue    1;34
# Green       0;32     Light Green   1;32
# Cyan        0;36     Light Cyan    1;36
# Red         0;31     Light Red     1;31
# Purple      0;35     Light Purple  1;35
# Brown       0;33     Yellow        1;33
# Light Gray  0;37     White         1;37

#export PS1='\[\033[1;31m\](\[\033[0;37m\]\u\[\033[1;31m\]@\h\[\033[1;31m\]:\[\033[1;36m\]\w\[\033[1;31m\])
#\[\033[1;36m\]\$\[\033[0;37m\]'

export PS1='\[\033[1;30m\][\[\033[0;37m\]\h\[\033[1;30m\]] \[\033[1;37m\]\[\033[1;36m\]\w\[\033[1;30m\] << \[\033[1;31m\]\$ \[\033[1;37m\]'
