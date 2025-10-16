#!/bin/bash

echo "TAILWIND CLI STARTED"

if [ -n "$BASH_SOURCE" ]; then
    SCRIPT_PATH="${BASH_SOURCE[0]}"
else
    SCRIPT_PATH="$0"
fi

SCRIPT_DIR=$(cd -P "$(dirname "$SCRIPT_PATH")" && pwd)

INPUT_DIR="$SCRIPT_DIR/css/input.css"
TAILWIND_DIR="$SCRIPT_DIR/css/tailwind.css"

code $SCRIPT_DIR
npx @tailwindcss/cli -i $INPUT_DIR -o $TAILWIND_DIR --watch
