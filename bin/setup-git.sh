#!/bin/sh

# Fixes a display problem where ESC characters are displayed when using
# "git log" and "gir diff".

git config --global core.pager "less -r"

